'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: '',
  });

  const whatsappNumber = '56934341783';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.service) {
      alert('Por favor completa al menos tu nombre y el servicio que necesitas.');
      return;
    }

    const whatsappMessage = `Hola CiberByte, mi nombre es *${formData.name}*. Me interesa el servicio de *${formData.service}*. Detalle: ${formData.message || 'Sin detalles adicionales'}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
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
    <section id="contacto" className="py-16 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header compacto */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hagamos Realidad tu{' '}
            <span className="text-primary-600">
              Proyecto Digital
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Escríbenos y conversemos al instante sobre tu idea.
          </p>
        </div>

        {/* Formulario limpio y optimizado para una sola pantalla en celular */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1.5">
                Tu Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-900 text-sm"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            {/* Servicio */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold text-gray-700 mb-1.5">
                ¿Qué servicio te interesa? *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-900 text-sm"
              >
                <option value="">Selecciona un servicio</option>
                <option value="Landing Page">Landing Page</option>
                <option value="E-commerce">E-commerce</option>
                <option value="App Móvil">App Móvil</option>
                <option value="Sitio Corporativo">Sitio Corporativo</option>
                <option value="Soporte y Hardware de PC">Soporte y Hardware de PC</option>
                <option value="Mantenimiento Web">Mantenimiento Web</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5">
                Detalles (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none text-gray-900 text-sm"
                placeholder="Breve descripción..."
              />
            </div>

            {/* Botón WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/30 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}