
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import data from '../lib/customizable';
import { services } from '../lib/customizable';


const { schedule } = data;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    service: '',
    message: ''
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola! Me llamo ${formData.name}
    
Teléfono: ${formData.phone}
Email: ${formData.email}
Servicio de interés: ${formData.service}

Mensaje: ${formData.message}

Enviado desde la web de ${data.name}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${data.wspPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "¡Consulta enviada!",
      description: "Te redirigimos a WhatsApp para completar tu consulta."
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleType: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 lg:text-5xl text-white">
            Contacto y Ubicación
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos ubicados en tu ciudad para brindarte el mejor servicio. Contactanos para agendar tu turno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envianos tu Consulta</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="tu@email.com"
                />
              </div>



              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Tipo de vehículo *
                </label>
                <select
                  name="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500"
                >
                  <option value="">Seleccionar tipo...</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                  <option value="camioneta">Camioneta</option>
                </select>
              </div>



              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500"
                >
                  <option value="">Seleccionar servicio...</option>
                  {services.map(service => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Mensaje /<p className='inline text-sm text-gray-400'> Si el servicio que requeris no figura en la lista agregalo acá abajo!</p>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Contanos más detalles sobre tu auto o el servicio que necesitás..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Enviar Consulta por WhatsApp
              </button>
            </form>
          </div>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info de Contacto */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-xl"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{data.name}</h4>
                    <p className="text-gray-300">{data.address}</p>
                    <p className="text-gray-400">{data.province}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <a href={`https://wa.me/${data.wspPhone}`} className="text-gray-300 hover:text-white transition-colors">
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href={`mailto:${data.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Horarios</h4>
                    <p className="text-gray-300">Lunes a Viernes: {schedule.lav}</p>
                    {schedule.sab && <p className="text-gray-300">Sábados: {schedule.sab}</p>}
                    {schedule.dom && <p className="text-gray-300">Domingos: {schedule.dom}</p>}
                    {!schedule.sab || !schedule.dom ? <p className="text-gray-400"> {!schedule.sab ? "Sábados y " : ""}Domingos cerrado</p> : null}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-xl"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Instagram</h4>
                    <a href={`https://instagram.com/${data.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      @{data.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src={`${data.mapsUrl}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Car Detailing"
                />
              </div>
              <p className="text-gray-400 mt-4">
                {data.address} - Atendemos en nuestro local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
