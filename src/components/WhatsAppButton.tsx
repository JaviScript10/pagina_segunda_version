'use client';

import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = '56979693753'; 

  const quickMessages = [
    { 
      label: '💬 Consulta general', 
      text: 'Hola, tengo una consulta general sobre sus servicios',
      origin: 'consulta'
    },
    { 
      label: '💰 Solicitar cotización', 
      text: 'Hola, me gustaría solicitar una cotización para mi proyecto',
      origin: 'cotizacion'
    },
    { 
      label: '📋 Háblame sobre tu proyecto', 
      text: 'Hola, quiero contarte sobre mi proyecto y ver cómo pueden ayudarme',
      origin: 'proyecto'
    },
    { 
      label: '❓ Tengo una pregunta', 
      text: 'Hola, tengo algunas preguntas sobre sus servicios',
      origin: 'pregunta'
    },
  ];

const handleQuickMessage = (text: string, origin: string) => {
  // Tracking invisible en URL params (no se ve en el mensaje)
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}&app_absent=0&utm_source=${origin}`;
  
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
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
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 animate-slide-up border-2 border-gray-200">
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
                  onClick={() => handleQuickMessage(msg.text, msg.origin)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors text-sm font-medium text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-300"
                >
                  {msg.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Selecciona una opción o escríbenos directamente
            </p>
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
