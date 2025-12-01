'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contacto@ciberbyte.cl',
      link: 'mailto:contacto@ciberbyte.cl',
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      content: '+56 9 7969 3753',
      link: 'tel:+56979693753',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      content: 'Valparaíso, Chile',
      link: 'https://maps.google.com/?q=Valparaiso,Chile',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear mensaje de WhatsApp
    const whatsappMessage = `
*Nuevo contacto desde CiberByte*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Servicio:* ${formData.service}
*Mensaje:* ${formData.message}
    `.trim();

    // Número de WhatsApp (reemplazar con tu número real)
    const whatsappNumber = '56979693753'; // Sin espacios ni símbolos
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Hagamos Realidad tu{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Proyecto Digital
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </div>

        {/* Layout 2 Columnas: Info Izquierda + Formulario Derecha */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* COLUMNA IZQUIERDA - Info de Contacto */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-900 shadow-md hover:shadow-2xl hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-600 mb-1">{info.title}</h3>
                      <p className="text-lg font-semibold text-gray-900">{info.content}</p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* CTA Adicional */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">¿Prefieres hablar directamente?</h3>
              <p className="text-sm mb-4 opacity-90">
                Llámanos o escríbenos por WhatsApp y conversemos sobre tu proyecto.
              </p>
              <a
                href="https://wa.me/56979693753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Abrir WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA - Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-900 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900 bg-white"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email y Teléfono */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900 bg-white"
                      placeholder="juan@ejemplo.cl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900 bg-white"
                      placeholder="+56 9 79693753"
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    ¿Qué servicio necesitas? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-gray-900 bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="App Móvil">App Móvil</option>
                    <option value="Sitio Corporativo">Sitio Corporativo</option>
                    <option value="Diseño UX/UI">Diseño UX/UI</option>
                    <option value="Mantenimiento Web">Mantenimiento Web</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none text-gray-900 bg-white"
                    placeholder="Describe brevemente tu proyecto, objetivos y presupuesto aproximado..."
                  />
                </div>

                {/* Botón Submit - WHATSAPP */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-3 group"
                >
                  <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Al enviar, tu mensaje se abrirá en WhatsApp para que lo confirmes antes de enviar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}