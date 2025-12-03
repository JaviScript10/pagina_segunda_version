import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="pt-24 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                                Términos y{' '}
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                    Condiciones
                                </span>
                            </h1>
                            <p className="text-gray-600">Última actualización: Diciembre 2025</p>
                        </div>

                        <div className="space-y-8 text-gray-700">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
                                <p className="leading-relaxed">
                                    Al acceder y utilizar los servicios de CiberByte, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte, no debe utilizar nuestros servicios.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción de Servicios</h2>
                                <p className="leading-relaxed">
                                    CiberByte ofrece servicios de desarrollo web, aplicaciones móviles, diseño UX/UI y soluciones digitales personalizadas. Los servicios específicos se detallan en cada propuesta comercial.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Contratación</h2>
                                <p className="leading-relaxed">
                                    El proceso se inicia con una consulta inicial, seguida de una propuesta comercial detallada. El proyecto se considera contratado una vez que el cliente acepta la propuesta y realiza el pago inicial.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pagos y Facturación</h2>
                                <p className="leading-relaxed">
                                    Los pagos se realizan según el calendario acordado. Generalmente: 50% al inicio y 50% al finalizar, pero puede variar según el proyecto.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
                                <p className="leading-relaxed">
                                    Una vez completado el pago total, el cliente recibe todos los derechos de uso del trabajo entregado, incluyendo código fuente y diseños.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Garantía y Soporte</h2>
                                <p className="leading-relaxed">
                                    Ofrecemos 30 días de garantía después del lanzamiento, cubriendo errores técnicos y ajustes menores sin costo adicional.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
                                <p className="leading-relaxed">
                                    CiberByte no será responsable por daños indirectos o consecuentes. Nuestra responsabilidad máxima se limita al monto total pagado por el servicio.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
                                <p className="leading-relaxed">
                                    Para consultas sobre estos términos: <a href="mailto:contacto@ciberbyte.cl" className="text-primary-600 font-semibold">contacto@ciberbyte.cl</a>
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