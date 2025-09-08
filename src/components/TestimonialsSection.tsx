import React from 'react';
import { reviews } from "../lib/customizable.js"
import data from "../lib/customizable.js"

const TestimonialsSection = () => {


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Testimonios de Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La opinión de nuestros clientes en Google Maps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4 justify-center">
                {renderStars(review.rating)}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 text-white font-medium rounded-full flex items-center justify-center text-sm">
                      {getInitials(review.author_name)}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">{review.author_name}</h4>
                      <p className="text-gray-500 text-sm">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                      Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Querés ser el próximo en dejar tu testimonio?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Experimentá la diferencia de un servicio premium de car detailing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${data.wspPhone}?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto`} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Agendar Turno
              </a>
              <a href={data.review} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors">
                Deja tu review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
