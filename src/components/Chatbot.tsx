'use client';

import { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      keywords: ['precio', 'costo', 'cuanto', 'valor', 'cotizar'],
      answer:
        'Los precios varían según el tipo de proyecto:\n\n' +
        '📄 Landing Page: Desde $150.000 CLP\n' +
        '🌐 Sitio Corporativo: Desde $350.000 CLP\n' +
        '🛒 E-commerce: Desde $600.000 CLP\n' +
        '📱 App Móvil: Desde $800.000 CLP\n\n' +
        '¿Quieres una cotización personalizada? Escribe "cotizar"',
    },
    {
      keywords: ['tiempo', 'demora', 'cuanto tarda', 'plazo', 'entreg'],
      answer:
        'Los tiempos de entrega dependen del proyecto:\n\n' +
        '⚡ Landing Page: 5-7 días\n' +
        '🌐 Sitio Corporativo: 2-3 semanas\n' +
        '🛒 E-commerce: 3-4 semanas\n' +
        '📱 App Móvil: 4-6 semanas\n\n' +
        'Trabajamos con metodologías ágiles para entregas rápidas.',
    },
    {
      keywords: ['servicios', 'que hacen', 'que ofrecen', 'especialidad'],
      answer:
        'Ofrecemos servicios de desarrollo digital:\n\n' +
        '✅ Desarrollo de páginas web\n' +
        '✅ Tiendas online (E-commerce)\n' +
        '✅ Aplicaciones móviles\n' +
        '✅ Landing pages\n' +
        '✅ SEO y optimización\n' +
        '✅ Mantenimiento y soporte\n\n' +
        '¿Te interesa alguno en particular?',
    },
    {
      keywords: ['contacto', 'contactar', 'hablar', 'comunicar'],
      answer:
        'Puedes contactarnos por:\n\n' +
        '📧 Email: contacto@ciberbyte.cl\n' +
        '📱 WhatsApp: +56 9 1234 5678\n' +
        '💬 Formulario de contacto en nuestra página\n\n' +
        '¡También puedes escribirnos directamente por WhatsApp desde el botón verde! 😊',
    },
    {
      keywords: ['cotizar', 'presupuesto', 'propuesta'],
      answer:
        'Para una cotización personalizada necesitamos conocer:\n\n' +
        '1️⃣ Tipo de proyecto (web, app, e-commerce)\n' +
        '2️⃣ Funcionalidades requeridas\n' +
        '3️⃣ Plazos estimados\n\n' +
        'Completa nuestro formulario de contacto o escríbenos al WhatsApp para recibir una propuesta en 24 horas.',
    },
    {
      keywords: ['mantenimiento', 'soporte', 'actualizar', 'modificar'],
      answer:
        'Ofrecemos planes de mantenimiento:\n\n' +
        '🔧 Plan Básico: $50.000/mes\n' +
        '⚙️ Plan Pro: $90.000/mes\n' +
        '💎 Plan Premium: $150.000/mes\n\n' +
        'Incluye: actualizaciones, backup, soporte técnico y modificaciones menores.',
    },
    {
      keywords: ['seo', 'google', 'posicion', 'ranking'],
      answer:
        'Todos nuestros sitios incluyen SEO básico:\n\n' +
        '✅ Optimización on-page\n' +
        '✅ Meta tags configurados\n' +
        '✅ Sitemap.xml\n' +
        '✅ Carga ultra-rápida\n' +
        '✅ Responsive design\n\n' +
        'También ofrecemos servicios SEO avanzados. ¿Te interesa?',
    },
    {
      keywords: ['hosting', 'dominio', 'alojar', 'servidor'],
      answer:
        'Sobre hosting y dominios:\n\n' +
        '🌐 Te ayudamos a elegir y configurar tu dominio\n' +
        '☁️ Recomendamos los mejores hosting según tu proyecto\n' +
        '⚡ Optimizamos para máxima velocidad\n\n' +
        'El hosting no está incluido en el precio, pero te guiamos en todo el proceso.',
    },
  ];

  const greetingMessage: Message = {
    id: 0,
    text: '¡Hola! 👋 Soy el asistente virtual de CiberByte.\n\n¿En qué puedo ayudarte hoy?\n\nPuedes preguntarme sobre:\n• Precios y cotizaciones\n• Servicios que ofrecemos\n• Tiempos de entrega\n• Contacto',
    isBot: true,
    timestamp: new Date(),
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([greetingMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    for (const faq of faqs) {
      if (faq.keywords.some((keyword) => input.includes(keyword))) {
        return faq.answer;
      }
    }

    return (
      'Gracias por tu mensaje. 😊\n\n' +
      'No estoy seguro de cómo responder a eso, pero puedes:\n\n' +
      '💬 Escribirnos por WhatsApp\n' +
      '📧 Enviarnos un email\n' +
      '📝 Llenar el formulario de contacto\n\n' +
      '¿Hay algo más en lo que pueda ayudarte?'
    );
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Asistente CiberByte</h3>
                <p className="text-xs text-white/80">Siempre en línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Cerrar chat"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-line ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-md'
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-400' : 'text-white/70'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('es-CL', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-12 h-12 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                aria-label="Enviar mensaje"
              >
                <FaPaperPlane className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <FaTimes className="w-7 h-7 text-white" />
        ) : (
          <FaComments className="w-8 h-8 text-white" />
        )}

        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></span>
        )}

        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chatea con nosotros
        </span>
      </button>
    </>
  );
}
