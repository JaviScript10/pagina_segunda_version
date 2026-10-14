import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { withMoney } from '@/lib/money';
import { HOSTING_TERM, PAYMENT_TERM, formatCLP, formatFrom, getService, pricing } from '@/data/pricing';

const landing = getService('landing');
const corporativo = getService('corporativo');
const tienda = getService('tienda');
const medida = getService('medida');
const mantencion = getService('mantencion');

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
    const faqs = [
        {
            question: '¿Cuánto tiempo toma desarrollar un sitio web?',
            answer: `Depende del proyecto. Como referencia, una landing page toma ${landing.timeline}, un sitio corporativo ${corporativo.timeline} y una tienda online ${tienda.timeline}. Antes de empezar te doy un cronograma.`,
        },
        {
            question: '¿Cuál es el costo de desarrollar un sitio web?',
            answer: `Una landing page parte en ${formatCLP(landing.from)}, un sitio corporativo en ${formatCLP(corporativo.from)}, una tienda online en ${formatCLP(tienda.from)} y un sistema o app a medida en ${formatCLP(medida.from)}. ${pricing.ivaNote}. El precio final depende de lo que necesites; te cotizo antes de empezar.`,
        },
        {
            question: '¿Ofrecen mantenimiento después del lanzamiento?',
            answer: `Sí. La mantención mensual va ${formatFrom(mantencion)} e incluye ${mantencion.includes.toLowerCase()}.`,
        },
        {
            question: '¿El sitio web será responsive (adaptable a móviles)?',
            answer: 'Absolutamente. Todos nuestros proyectos son 100% responsive y se adaptan perfectamente a cualquier dispositivo: móviles, tablets y computadores. Probamos en múltiples dispositivos antes de entregar.',
        },
        {
            question: '¿Puedo actualizar el contenido yo mismo después?',
            answer: 'Sí, implementamos sistemas de gestión de contenido (CMS) fáciles de usar. Te capacitamos para que puedas actualizar textos, imágenes y productos sin necesidad de conocimientos técnicos.',
        },
        {
            question: '¿Incluyen hosting y dominio?',
            answer: `${HOSTING_TERM} Te ayudo a configurarlos, o usamos tu hosting actual si ya tienes uno.`,
        },
        {
            question: '¿Qué pasa si necesito cambios después de la entrega?',
            answer: 'Incluimos revisiones durante el desarrollo según lo acordado. Después de la entrega, los cambios adicionales se cotizan por separado o puedes contratar nuestro plan de mantenimiento que incluye horas de soporte mensual.',
        },
        {
            question: '¿Trabajan con empresas fuera de Chile?',
            answer: 'Sí, trabajamos con clientes en toda Latinoamérica y el mundo. Usamos herramientas de comunicación remota para coordinarnos eficientemente sin importar tu ubicación.',
        },
        {
            question: '¿Ofrecen garantía?',
            answer: 'Sí, todos nuestros proyectos incluyen 30 días de garantía después del lanzamiento. Esto cubre cualquier error técnico o ajuste menor sin costo adicional.',
        },
        {
            question: '¿Cómo es el proceso de pago?',
            answer: `${PAYMENT_TERM} Para proyectos grandes se puede dividir en más cuotas. Acepto transferencia bancaria y otros medios de pago.`,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="pt-24 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                                Preguntas Frecuentes
                            </h1>
                            <p className="text-lg text-gray-600">
                                Resolvemos las dudas más comunes sobre nuestros servicios y procesos.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-900 shadow-md hover:shadow-xl hover:border-primary-600 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {index + 1}. {faq.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{withMoney(faq.answer)}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                ¿No encuentras tu respuesta?
                            </h2>
                            <p className="text-lg mb-6 opacity-90">
                                Contáctanos directamente y te responderemos en menos de 24 horas.
                            </p>
                            <a href="/#contacto" className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:scale-105 transition-transform shadow-lg">
                                Contáctanos Ahora
                            </a>
                        </div>

                        {/* AGREGAR ESTA SECCIÓN 👇 */}
                        <div className="mt-8 text-center">
                            <a href="/" className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 px-8 rounded-lg hover:scale-105 transition-transform">
                                Volver al Inicio
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}