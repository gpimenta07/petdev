
import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import DogImg from "../../../public/hero-dog.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={DogImg}
          alt="imagem-cachorro"
          fill
          sizes="10vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        ></Image>
        <div className="absolute lg:hidden inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg" data-aos="fade-down">
              Oferecemos os melhores serviçõs para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a data-aos="fade-down"
              className="bg-green-500 cursor-pointer hover:bg-green-700 duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-1.5"
              href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`} target="_blank"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div data-aos="fade-down" className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={DogImg}
              alt="imagem-cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0px, 50vw"
              quality={100}
              priority
            ></Image>
          </div>
        </article>
      </div>
    </section>
  );
}
