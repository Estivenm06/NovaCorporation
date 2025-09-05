"use client";
import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity z-50">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mx-10 m-auto">
                <div className="bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-end mb-3">
                    <button
                      type="button"
                      className="w-full justify-center rounded-full bg-white px-4 py-2 text-sm shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:scale-110 transition-transform duration-300 sm:mt-0 sm:w-auto cursor-pointer"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <Image
                    src="/img/Photo1.webp"
                    alt="Photo 1"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <div className="mx-auto container py-10 my-15">
        <div className="mx-10">
          <h1 className="text-center text-7xl font-bold">Sobre Nosotros</h1>
          <p className="text-justify text-2xl my-5">
            ¿Alguna vez has mirado al cielo nocturno y te has maravillado ante la inmensidad del cosmos?. 
            La astronomía es una ciencia fascinante que nos invita a explorar los secretos del universo, 
            desde las estrellas y galaxias distantes hasta los planetas cercanos. Sin embargo, para 
            adentrarse en este apasionante mundo, uno necesita acceso a imágenes de calidad que muestren 
            la belleza del espacio profundo y los objetos celestes. Aquí es donde entra en juego &quot;Nebulã&quot;, 
            una innovadora empresa dedicada a proporcionar imágenes astronómicas de alta calidad de manera 
            accesible para todos los entusiastas de la astronomía. Nuestra misión es acercar las maravillas 
            del universo a tu pantalla, permitiéndote explorar el cosmos desde la comodidad de tu hogar.
          </p>
          <button
            type="button"
            className="py-2 px-10 bg-purple-500 rounded-full text-white text-4xl hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
            onClick={openModal}
          >
            Presione
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto container py-10 my-15" id="services">
        <div className="mx-10">
          <h1 className="text-center text-7xl font-bold">Servicios</h1>
          <p className="text-justify text-2xl mt-5">
            En &quot;Nebulã&quot;, creemos que la belleza del universo no debe estar reservada solo para 
            astrónomos profesionales. Por eso, trabajamos arduamente para capturar imágenes 
            espectaculares de los objetos celestes más fascinantes y convertirlas en recursos 
            accesibles para todos. Así que, si eres un apasionado de la astronomía, un educador 
            que busca recursos visuales impactantes o simplemente alguien que busca contemplar 
            las maravillas del espacio, &quot;Nebulã&quot; es tu fuente confiable de imágenes astronómicas 
            excepcionales.
          </p>
          <p className="text-5xl mb-5 mt-5 text-center sm:text-left">
            ¡Come and explore the universe with us!
          </p>
          <Link
            href="/plans"
            className="inline-block py-2 px-10 bg-purple-500 rounded-full text-white text-4xl hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
          >
            Planes
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
