import React from 'react';
import { Car } from 'lucide-react';
import data from '../lib/customizable';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo y Descripción */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">

            <div>
              <h3 className="text-xl font-bold">{data.name}</h3>

            </div>
          </div>
          <p className="text-gray-300 mb-6 max-w-md">
            Especialistas en car detailing premium.
            Transformamos tu vehículo con técnicas profesionales y productos de primera calidad.
          </p>
          <div className="flex space-x-4">
            <a href={`https://instagram.com/${data.instagram}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${data.wspPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
            {data.facebook &&
              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
            }

            {data.tiktok &&
              <a
                href={data.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black p-3 rounded-full transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </a>
            }
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => {
                const element = document.getElementById('inicio');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Servicios
              </button>
            </li>
            <li>
              <button onClick={() => {
                const element = document.getElementById('galeria');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Galería
              </button>
            </li>
            <li>
              <button onClick={() => {
                const element = document.getElementById('testimonios');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Testimonios
              </button>
            </li>
            <li>
              <button onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li className="text-gray-300">
              +54 (11) 1234-5678
            </li>
            <li className="text-gray-300">
              info@cardetailing.com
            </li>
            <li className="text-gray-300">
              Calle Principal 123
            </li>
            <li className="text-gray-300">
              Lun-Vie: 9:00-18:00
            </li>
            <li className="text-gray-300">
              @cardetailing
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {data.name}. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;