import { Fragment, type ReactNode } from 'react';

// "$180.000", "$1.500.000+", "$35.000/mes", "$30.000/año"
const MONEY = /(\$\d{1,3}(?:\.\d{3})*\+?(?:\/(?:mes|año))?)/;

/** Monto de precio con la fuente de títulos (Archivo), como pide el brief para todo el sitio. */
export function Money({ children }: { children: ReactNode }) {
  return <span className="money">{children}</span>;
}

/** Envuelve en <Money> cada monto que aparezca dentro de un texto. */
export function withMoney(text: string): ReactNode {
  return text.split(MONEY).map((part, i) =>
    i % 2 === 1 ? <Money key={i}>{part}</Money> : <Fragment key={i}>{part}</Fragment>
  );
}
