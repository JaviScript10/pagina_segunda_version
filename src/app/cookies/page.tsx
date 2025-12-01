import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPage() {
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
                                    Cookies
                                </span>
                            </h1>
                            <p className="text-gray-600">Última actualización: Diciembre 2024</p>
                        </div>

                        <div className="space-y-8 text-gray-700">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
                                <p className="leading-relaxed">Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan para hacer que los sitios funcionen de manera más eficiente.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de Cookies</h2>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <h3 className="font-bold text-gray-900 mb-2">Cookies Esenciales</h3>
                                        <p className="text-sm">Necesarias para que el sitio funcione correctamente. Se eliminan al cerrar el navegador.</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <h3 className="font-bold text-gray-900 mb-2">Cookies Analíticas</h3>
                                        <p className="text-sm">Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio (ej: Google Analytics).</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <h3 className="font-bold text-gray-900 mb-2">Cookies de Funcionalidad</h3>
                                        <p className="text-sm">Permiten que el sitio recuerde sus preferencias para proporcionar funciones mejoradas.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Gestionar Cookies</h2>
                                <p className="leading-relaxed mb-3">Puede controlar y eliminar cookies desde la configuración de su navegador:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                                    <li>Firefox: Opciones → Privacidad y seguridad</li>
                                    <li>Safari: Preferencias → Privacidad</li>
                                    <li>Edge: Configuración → Cookies y permisos del sitio</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Más Información</h2>
                                <p className="leading-relaxed">
                                    Para preguntas: <a href="mailto:contacto@ciberbyte.cl" className="text-primary-600 font-semibold">contacto@ciberbyte.cl</a>
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