import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-gray-300 footer nav">
      <div className="mx-auto container divide-y-1">
        <div className="grid md:grid-cols-2 py-8 mx-10">
          <div className="flex flex-col gap-10 items-center sm:items-start">
            <Image
              src="/img/Logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="img-fluid w-15 rounded-full select-none"
            />
            <p className='text-md'>¿Por qué usar Nebulã?</p>
            <p className="text-md -mt-5 text-center mx-5 sm:mx-0 md:text-left sm:text-left ">
              Es tu fuente confiable de imágenes astronómicas excepcionales que combina calidad, accesibilidad y una pasión por la astronomía.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com">
                <Image
                  src="/img/facebook.webp"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="img-fluid h-5"
                />
              </Link>
              <Link href="https://twitter.com">
                <Image
                  src="/img/twitter.webp"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="img-fluid h-5"
                />
              </Link>
              <Link href="https://github.com/Estivenm06">
                <Image
                  src="/img/github.webp"
                  alt="Github"
                  width={20}
                  height={20}
                  className="img-fluid h-5"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold uppercase mb-3 text-center md:text-center sm:text-left md:justify-center">
              Colaboraciones
            </h1>
            <div className="flex mx-5 md:mx-0 justify-center sm:justify-start md:justify-center">
              <ul className="list-disc">
                <li>CelestialTech</li>
                <li>CosmicLearning</li>
                <li>eCommerceGalaxy</li>
                <li>AstronomySoft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
