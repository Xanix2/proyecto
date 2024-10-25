import { Menu, X, Compass } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Santander Aventura</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md font-medium">Inicio</a>
              <a href="#destinos" className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md font-medium">Destinos</a>
              <a href="#experiencias" className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md font-medium">Experiencias</a>
              <a href="#contacto" className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md font-medium">Contacto</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#destinos" className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Destinos</a>
            <a href="#experiencias" className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Experiencias</a>
            <a href="#contacto" className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}