'use client';

import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  // NUMERO WSP
  const phoneNumber = '56979693753'; 
  const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios.');

  const quickMessages = [
    { label: 'Cotizar sitio web', text: 'Hola, quiero cotizar un sitio web' },
    { label: 'Información e-commerce', text: 'Me interesa información sobre e-commerce' },
    { label: 'Desarrollar una app', text: 'Quiero desarrollar una aplicación móvil' },
    { label: 'Consulta general', text: 'Tengo una consulta sobre sus servicios' },
  ];

const handleQuickMessage = (text: string) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setIsOpen(false);
};

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Quick Messages Panel */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">¿Cómo podemos ayudarte?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg.text)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors text-sm font-medium text-gray-700 hover:text-primary-600"
                >
                  {msg.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Abrir WhatsApp"
        >
          {isOpen ? (
            <FaTimes className="w-7 h-7 text-white" />
          ) : (
            <FaWhatsapp className="w-8 h-8 text-white" />
          )}
          
          {/* Pulse Animation */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          )}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            ¿Necesitas ayuda?
          </span>
        </button>
      </div>
    </>
  );
}
