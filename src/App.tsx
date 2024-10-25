import React from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://unsplash.com/es/fotos/arboles-verdes-junto-a-un-edificio-de-hormigon-blanco-durante-el-dia-jMLilxLyjUg"
            alt="Chicamocha Canyon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Descubre Santander</h1>
            <p className="text-xl md:text-2xl mb-8">Aventura, naturaleza y cultura en el corazón de Colombia</p>
            <a href="#destinos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explorar Destinos
            </a>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Destinos Imperdibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://unsplash.com/es/fotos/arboles-verdes-junto-a-un-edificio-de-hormigon-blanco-durante-el-dia-jMLilxLyjUg"
                alt="Barichara"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Barichara</h3>
                <p className="text-gray-700">El pueblo más lindo de Colombia, conocido por su arquitectura colonial y calles empedradas.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
                alt="Cañón del Chicamocha"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Cañón del Chicamocha</h3>
                <p className="text-gray-700">Uno de los cañones más profundos del mundo, perfecto para deportes extremos.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
                alt="Parque Nacional del Chicamocha"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">PANACHI</h3>
                <p className="text-gray-700">Parque temático con teleférico y vistas espectaculares del cañón.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiencias" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencias Únicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
                alt="Parapente en Chicamocha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Parapente</h3>
                  <p>Vuela sobre el impresionante Cañón del Chicamocha</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
                alt="Rafting en Río Fonce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Rafting</h3>
                  <p>Aventura en los rápidos del Río Fonce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-emerald-600" />
                  <span>Bucaramanga, Santander, Colombia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-600" />
                  <span>+57 (7) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-600" />
                  <span>info@santanderaventura.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    <Instagram />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-emerald-600">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Santander Aventura. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;