'use client';

import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el mensaje para Gmail
    const subject = `Contacto CiberByte - ${formData.service || 'Consulta'}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}
Servicio: ${formData.service}

Mensaje:
${formData.message}
  `.trim();

    // Abrir Gmail con los datos
    const mailtoLink = `mailto:jera.bkr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);

    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => setIsSuccess(false), 5000);
  };
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'contacto@ciberbyte.cl',
      link: 'mailto:contacto@ciberbyte.cl',
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      value: '+56 9 7969 3753',
      link: 'tel:+56979693753',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      value: 'Valparaíso, Chile',
      link: '#',
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Empezar tu Proyecto?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="card bg-gradient-to-br from-primary-50 to-accent-50">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3">
                {[
                  'Respuesta en menos de 24 horas',
                  'Cotización gratuita y sin compromiso',
                  'Asesoría personalizada',
                  'Garantía de satisfacción',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="landing">Landing Page</option>
                  <option value="web">Sitio Corporativo</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app">App Móvil</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="custom">Proyecto Personalizado</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-gray-900 bg-white"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3 animate-fade-in">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    ¡Mensaje enviado! Te responderemos pronto.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
