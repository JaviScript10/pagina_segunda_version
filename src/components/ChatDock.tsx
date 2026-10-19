'use client';

import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { useDialog } from '@/hooks/useDialog';
import { WHATSAPP_DISPLAY, whatsappUrl } from '@/lib/site';
import { formatFrom, getService, pricing, type ServiceId } from '@/data/pricing';
import { withMoney } from '@/lib/money';

// ---------- Tipos ----------

type Action =
  | { type: 'whatsapp'; topic?: string }
  | { type: 'send-quote' }
  | { type: 'restart' }
  | { type: 'pricing' }
  | { type: 'service'; id: ServiceId }
  | { type: 'wizard'; service?: ServiceId }
  | { type: 'answer'; value: string };

type Chip = { label: string; action: Action };
type Msg = { id: number; role: 'assistant' | 'user'; text: string; chips?: Chip[] };
type WizardData = { tipo: string; negocio: string; presupuesto: string; plazo: string };
type WizardStep = 0 | 1 | 2 | 3 | 4;

// ---------- Opciones ----------

const WEB_SERVICES = pricing.items.filter((i) => i.kind === 'web');
const PRESUPUESTO_CHIPS = [
  'Hasta $300.000',
  '$300.000 – $700.000',
  '$700.000 – $1.500.000',
  '$1.500.000+',
  'A definir',
];
const PLAZO_CHIPS = ['1–2 semanas', '3–4 semanas', '5+ semanas', 'A definir'];

const CHIP_WHATSAPP = 'Escribir directo por WhatsApp';
const CHIP_RESTART = 'Volver al inicio';

const EMPTY_WIZARD: WizardData = { tipo: '', negocio: '', presupuesto: '', plazo: '' };

const MAIN_MENU: Chip[] = [
  { label: CHIP_WHATSAPP, action: { type: 'whatsapp' } },
  { label: 'Cotizar un proyecto', action: { type: 'wizard' } },
  { label: 'Ver precios', action: { type: 'pricing' } },
  { label: getService('mantencion').name, action: { type: 'service', id: 'mantencion' } },
  { label: getService('soporte-pc').name, action: { type: 'service', id: 'soporte-pc' } },
];

const GREETING = 'Hola, soy el asistente de **CiberByte**. ¿En qué te ayudo?';

// Palabras clave para lo que se escribe a mano fuera del modo guiado
const SERVICE_KEYWORDS: [ServiceId, RegExp][] = [
  ['landing', /landing/],
  ['corporativo', /corporativ/],
  ['tienda', /tienda|e-?commerce|carrito/],
  ['medida', /\bapp\b|aplicaci|sistema|medida/],
  ['mantencion', /mantenci|mantenimiento/],
  ['soporte-pc', /\bpc\b|computador|notebook|formate/],
];

// ---------- Componente ----------

let nextId = 0;
const msg = (role: Msg['role'], text: string, chips?: Chip[]): Msg => ({ id: nextId++, role, text, chips });

export default function ChatDock() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => [msg('assistant', GREETING, MAIN_MENU)]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<WizardStep>(0);
  const [wizard, setWizard] = useState<WizardData>(EMPTY_WIZARD);
  const [toast, setToast] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<number | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const dockRef = useDialog<HTMLDivElement>(open, close);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollTo({ top: list.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
  }, [messages]);

  useEffect(() => () => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
  }, []);

  const say = (text: string, chips?: Chip[]) => setMessages((m) => [...m, msg('assistant', text, chips)]);
  const echo = (text: string) => setMessages((m) => [...m, msg('user', text)]);

  function showToast(text: string) {
    setToast(text);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }

  function openWhatsApp(text: string) {
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
    showToast('Abriendo WhatsApp…');
    say(`Te abrí WhatsApp en otra pestaña. Si no se abrió, mi número es **${WHATSAPP_DISPLAY}**.`, [
      { label: CHIP_RESTART, action: { type: 'restart' } },
    ]);
  }

  function restart() {
    setStep(0);
    setWizard(EMPTY_WIZARD);
    setMessages([msg('assistant', GREETING, MAIN_MENU)]);
  }

  function showPricing() {
    const lines = pricing.items.map(
      (i) => `**${i.name}**: ${formatFrom(i)}${i.timeline ? ` (${i.timeline})` : ''}${i.scope ? `. ${i.scope}` : ''}`
    );
    say(
      ['Estos son mis precios base:', '', ...lines, '', `${pricing.ivaNote} ${pricing.terms.join(' ')}`].join('\n'),
      [
        ...pricing.items.map((i): Chip => ({ label: i.name, action: { type: 'service', id: i.id } })),
        { label: CHIP_RESTART, action: { type: 'restart' } },
      ]
    );
  }

  function showService(id: ServiceId) {
    const s = getService(id);
    const from = formatFrom(s);
    const text = [
      `**${s.name}**`,
      `${from.charAt(0).toUpperCase()}${from.slice(1)}.${s.timeline ? ` Plazo típico: ${s.timeline}.` : ''}`,
      `Incluye: ${s.includes}.`,
      ...(s.scope ? [`${s.scope}.`] : []),
      pricing.ivaNote,
    ].join('\n');
    const chips: Chip[] = [
      { label: CHIP_WHATSAPP, action: { type: 'whatsapp', topic: s.name } },
      ...(s.kind === 'web' ? [{ label: 'Cotizar este servicio', action: { type: 'wizard', service: id } } as Chip] : []),
      { label: CHIP_RESTART, action: { type: 'restart' } },
    ];
    say(text, chips);
  }

  function startWizard(service?: ServiceId) {
    if (service) {
      setWizard({ ...EMPTY_WIZARD, tipo: getService(service).name });
      setStep(2);
      say('**Paso 2 de 4:** ¿Cuál es el rubro de tu negocio? Por ejemplo: restaurante, ferretería, consultora.');
      return;
    }
    setWizard(EMPTY_WIZARD);
    setStep(1);
    say(
      '**Paso 1 de 4:** ¿Qué tipo de proyecto necesitas?',
      WEB_SERVICES.map((s) => ({ label: s.name, action: { type: 'answer', value: s.name } }))
    );
  }

  /** Avanza el modo guiado con un valor ya resuelto (texto exacto del chip o lo que se escribió). */
  function answer(value: string) {
    if (step === 1) {
      setWizard((w) => ({ ...w, tipo: value }));
      setStep(2);
      say('**Paso 2 de 4:** ¿Cuál es el rubro de tu negocio? Por ejemplo: restaurante, ferretería, consultora.');
    } else if (step === 2) {
      setWizard((w) => ({ ...w, negocio: value }));
      setStep(3);
      say(
        '**Paso 3 de 4:** ¿Cuál es tu presupuesto estimado?',
        PRESUPUESTO_CHIPS.map((c) => ({ label: c, action: { type: 'answer', value: c } }))
      );
    } else if (step === 3) {
      setWizard((w) => ({ ...w, presupuesto: value }));
      setStep(4);
      say(
        '**Paso 4 de 4:** ¿Para cuándo lo necesitas?',
        PLAZO_CHIPS.map((c) => ({ label: c, action: { type: 'answer', value: c } }))
      );
    } else if (step === 4) {
      const data = { ...wizard, plazo: value };
      setWizard(data);
      setStep(0);
      say(['**Tu cotización:**', summary(data), '', '¿La envío por WhatsApp?'].join('\n'), [
        { label: 'Enviar por WhatsApp', action: { type: 'send-quote' } },
        { label: CHIP_RESTART, action: { type: 'restart' } },
      ]);
    }
  }

  function run(action: Action) {
    switch (action.type) {
      case 'whatsapp':
        return openWhatsApp(
          action.topic
            ? `Hola, vengo desde el sitio de CiberByte. Me interesa: ${action.topic}.`
            : 'Hola, vengo desde el sitio de CiberByte.'
        );
      case 'send-quote':
        return openWhatsApp(`Hola, quiero cotizar un proyecto:\n${summary(wizard)}`);
      case 'restart':
        return restart();
      case 'pricing':
        return showPricing();
      case 'service':
        return showService(action.id);
      case 'wizard':
        return startWizard(action.service);
      case 'answer':
        return answer(action.value);
    }
  }

  function onChip(chip: Chip) {
    echo(chip.label);
    run(chip.action);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    echo(text);

    if (step > 0) {
      // Si lo escrito coincide con un chip del paso, se usa el texto exacto del chip
      const options = step === 1 ? WEB_SERVICES.map((s) => s.name) : step === 3 ? PRESUPUESTO_CHIPS : step === 4 ? PLAZO_CHIPS : [];
      const exact = options.find((o) => normalize(o) === normalize(text));
      const keyword = step === 1 ? SERVICE_KEYWORDS.find(([, re]) => re.test(normalize(text))) : undefined;
      answer(exact ?? (keyword ? getService(keyword[0]).name : text));
      return;
    }

    const t = normalize(text);
    if (/whatsapp/.test(t)) return run({ type: 'whatsapp' });
    if (/cotiz/.test(t)) return run({ type: 'wizard' });
    if (/precio|valor|cuanto|cuánto/.test(t)) return run({ type: 'pricing' });
    if (/^(volver|inicio|menu|menú)/.test(t)) return run({ type: 'restart' });
    const service = SERVICE_KEYWORDS.find(([, re]) => re.test(t));
    if (service) return run({ type: 'service', id: service[0] });

    say('No te entendí bien. Elige una opción o escríbeme directo por WhatsApp.', MAIN_MENU);
  }

  const last = messages[messages.length - 1];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir chat de contacto"
        aria-expanded={open}
        aria-controls="chatdock"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-lg border-2 border-tinta bg-whatsapp text-tinta transition-transform duration-150 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerro motion-reduce:transition-none"
      >
        <SiWhatsapp className="h-7 w-7" aria-hidden="true" />
      </button>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-tinta/40 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        id="chatdock"
        ref={dockRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatdock-title"
        tabIndex={-1}
        inert={!open}
        // visibility solo transiciona al cerrar: al abrir debe quedar visible de inmediato para poder recibir el foco
        className={`fixed z-[70] flex flex-col overflow-hidden border border-tinta/15 bg-papel text-tinta outline-none duration-200 ease-out motion-reduce:transition-none
          inset-x-0 bottom-0 h-[86dvh] rounded-t-lg
          sm:inset-x-auto sm:bottom-5 sm:right-5 sm:h-[min(640px,86dvh)] sm:w-[380px] sm:rounded-lg
          ${open
            ? 'visible translate-y-0 opacity-100 transition-[transform,opacity]'
            : 'invisible translate-y-full opacity-100 transition-[transform,opacity,visibility] sm:translate-y-3 sm:opacity-0'}`}
      >
        <header className="flex items-center justify-between gap-3 border-b border-tinta/10 px-4 py-3">
          <div>
            <h2 id="chatdock-title" className="text-base font-bold leading-tight">Chat de CiberByte</h2>
            <p className="text-sm text-tinta/70">Te respondo por WhatsApp</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar chat"
            className="grid h-9 w-9 place-items-center rounded-lg text-tinta transition-colors duration-150 ease-out hover:bg-niebla active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cerro"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </header>

        <div ref={listRef} role="log" aria-live="polite" className="flex flex-1 flex-col gap-3 overflow-y-auto overscroll-contain bg-niebla p-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex max-w-[88%] flex-col gap-2 ${m.role === 'user' ? 'self-end' : 'self-start'}`}>
              <p
                className={`whitespace-pre-line rounded-lg px-3.5 py-2.5 text-[0.95rem] leading-relaxed ${
                  m.role === 'user' ? 'bg-tinta text-papel' : 'border border-tinta/10 bg-papel text-tinta'
                }`}
              >
                {rich(m.text)}
              </p>
            </div>
          ))}

          {/* Solo la última pregunta tiene opciones activas, así el modo guiado no se desordena */}
          {last.role === 'assistant' && last.chips && (
            <div className="grid grid-cols-2 gap-2">
              {last.chips.map((chip) => {
                const isWhatsApp = chip.action.type === 'whatsapp' || chip.action.type === 'send-quote';
                return (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => onChip(chip)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-bold leading-snug transition-[transform,background-color,border-color] duration-150 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerro ${
                      isWhatsApp
                        ? 'col-span-2 flex items-center justify-center gap-2 border-tinta bg-whatsapp text-tinta hover:bg-whatsapp/85'
                        : 'border-cerro/40 bg-papel text-cerro hover:border-cerro hover:bg-cerro/5'
                    }`}
                  >
                    {isWhatsApp && <SiWhatsapp className="h-4 w-4" aria-hidden="true" />}
                    {withMoney(chip.label)}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} className="flex gap-2 border-t border-tinta/10 bg-papel p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder(step)}
            aria-label="Mensaje"
            className="h-11 min-w-0 flex-1 rounded-lg border border-tinta/20 bg-papel px-3.5 text-base text-tinta placeholder:text-tinta/60 focus:border-cerro focus:outline-none focus:ring-2 focus:ring-cerro/25"
          />
          <button
            type="submit"
            aria-label="Enviar mensaje"
            className="grid h-11 w-11 place-items-center rounded-lg bg-tinta text-papel transition-transform duration-150 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerro"
          >
            <FaPaperPlane className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>

      <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-24 right-5 z-[80]">
        {toast && <p className="rounded-lg bg-tinta px-4 py-2.5 text-sm font-bold text-papel">{toast}</p>}
      </div>
    </>
  );
}

// ---------- Utilidades ----------

/** **negrita** → <strong> y montos en Archivo. React escapa el resto, así que nunca se inserta HTML. */
function rich(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{withMoney(part)}</strong> : <Fragment key={i}>{withMoney(part)}</Fragment>
  );
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

function placeholder(step: WizardStep) {
  if (step === 1) return 'Elige el tipo de proyecto…';
  if (step === 2) return 'Escribe el rubro de tu negocio…';
  if (step === 3) return 'Elige o escribe tu presupuesto…';
  if (step === 4) return 'Elige o escribe el plazo…';
  return 'Escribe tu mensaje…';
}

function summary(d: WizardData) {
  return [
    `• Tipo: ${d.tipo || '—'}`,
    `• Rubro: ${d.negocio || '—'}`,
    `• Presupuesto: ${d.presupuesto || '—'}`,
    `• Plazo: ${d.plazo || '—'}`,
  ].join('\n');
}
