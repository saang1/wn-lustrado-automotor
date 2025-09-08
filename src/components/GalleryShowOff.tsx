
import React, { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryItems = [
    {
      image: '/uploads/interior.jpg',
      title: 'Detailing Interior Alfa Romeo',
      service: 'Limpieza Profunda + Acondicionamiento'
    },
    {
      image: '/uploads/faros.jpg',
      title: 'Pulido de Faros Profesional',
      service: 'Restauración + Protección UV'
    },
    {
      image: '/uploads/lustrado.jpg',
      title: 'Restauración Sistema de Frenos',
      service: 'Limpieza + Pintura + Protección'
    },
    {
      image: '/uploads/motor.jpg',
      title: 'Restauración de Llantas Volkswagen',
      service: 'Limpieza + Pulido + Protección'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Galería de <span className="text-gray-600">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algunos de nuestros trabajos más destacados. 
            La calidad y el detalle que nos caracterizan en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-2xl w-full" onClick={e => e.stopPropagation()}>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {galleryItems[selectedImage].service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          >
            Ver Más Trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;