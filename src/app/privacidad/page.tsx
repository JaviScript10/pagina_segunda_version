import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="pt-24 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                                Política de{' '}
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                    Privacidad
                                </span>
                            </h1>
                            <p className="text-gray-600">Última actualización: Diciembre 2025</p>
                        </div>

                        <div className="space-y-8 text-gray-700">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
                                <p className="leading-relaxed mb-3">
                                    En CiberByte recopilamos información que usted nos proporciona directamente cuando completa nuestro formulario de contacto, solicita una cotización o se comunica con nosotros.
                                </p>
                                <p className="leading-relaxed">Esta información puede incluir: nombre, email, teléfono, empresa y detalles sobre su proyecto.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos su Información</h2>
                                <p className="leading-relaxed">Utilizamos su información para responder consultas, proporcionar cotizaciones personalizadas, ejecutar proyectos contratados y mejorar nuestros servicios.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de Datos</h2>
                                <p className="leading-relaxed">Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración o destrucción.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
                                <p className="leading-relaxed">No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing sin su consentimiento explícito.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sus Derechos</h2>
                                <p className="leading-relaxed mb-3">Usted tiene derecho a acceder, corregir, eliminar u oponerse al procesamiento de su información personal en cualquier momento.</p>
                                <p className="leading-relaxed">
                                    Para ejercer estos derechos: <a href="mailto:contacto@ciberbyte.cl" className="text-primary-600 font-semibold">contacto@ciberbyte.cl</a>
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
                                <p className="leading-relaxed">
                                    Si tiene preguntas sobre esta política de privacidad: <a href="mailto:contacto@ciberbyte.cl" className="text-primary-600 font-semibold">contacto@ciberbyte.cl</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
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