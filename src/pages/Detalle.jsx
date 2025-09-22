import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Detalle() {
  const navigate = useNavigate();
  // Se obtiene el ID de la infografía desde los parámetros de la URL.
  const { infoId } = useParams();

  // Se construye la ruta de la imagen dinámicamente. Se usa 'Info1' como fallback.
  const imageSrc = `/infografias/${infoId || "Info1"}.jpg`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:to-black">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-500/20 
                      dark:from-blue-500/10 dark:to-blue-600/10
                      rounded-full blur-xl animate-float opacity-30 dark:opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-amber-500/20 
                      dark:from-amber-500/10 dark:to-amber-600/10
                      rounded-full blur-lg animate-pulse opacity-25 dark:opacity-15"></div>

        {/* Contenedor principal */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 text-center
                       gradient-text-corporate drop-shadow-lg tracking-tight
                       animate-fadeIn cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/")}>
            Detalles del Proyecto
          </h1>

          {/* Contenedor de la imagen */}
          <div className="relative group mb-8 sm:mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-amber-400/20 
                          dark:from-blue-500/10 dark:via-blue-400/10 dark:to-amber-400/10
                          rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 
                          shadow-2xl shadow-slate-500/20 group-hover:shadow-blue-500/30
                          dark:shadow-black/50 dark:group-hover:shadow-blue-400/20
                          border-2 border-slate-200/60 group-hover:border-blue-300/80
                          dark:border-slate-700 dark:group-hover:border-blue-600
                          transform transition-all duration-500 group-hover:scale-[1.02]
                          overflow-hidden">
              
              <img
                src={imageSrc}
                alt={`Infografía del Proyecto ${infoId}`}
                className="w-full h-auto rounded-2xl shadow-lg 
                         filter brightness-100 group-hover:brightness-105 contrast-100 group-hover:contrast-105
                         dark:brightness-90 dark:group-hover:brightness-100
                         transform transition-all duration-500"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-slate-900/80 to-slate-800/80 
                            dark:from-black/80 dark:to-slate-900/80
                            backdrop-blur-sm rounded-xl p-4 text-white
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            transform translate-y-4 group-hover:translate-y-0">
                <p className="text-sm sm:text-base font-semibold">
                  Visualización detallada del proyecto
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  Haz clic para ampliar la imagen
                </p>
              </div>
            </div>
          </div>

          {/* Botón de retorno */}
          <div className="text-center">
            <button
              className="relative px-8 sm:px-10 py-4 sm:py-5 
                       bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 
                       hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 
                       text-white font-bold rounded-full shadow-xl
                       transform transition-all duration-300 hover:scale-110 hover:shadow-2xl
                       active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300/50
                       dark:focus:ring-blue-800/50
                       text-base sm:text-lg lg:text-xl
                       overflow-hidden group
                       border-2 border-white/30 dark:border-blue-500/30
                       shadow-blue-500/30 dark:shadow-blue-500/40
                       animate-fadeIn delay-500"
              onClick={() => navigate("/")}
            >
              <span className="relative z-10 mr-3 tracking-wide">← Volver a la Galería</span>
            </button>

            <p className="mt-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium
                         animate-fadeIn delay-700">
              Explora más proyectos en nuestra galería principal
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
