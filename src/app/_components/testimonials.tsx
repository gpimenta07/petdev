"use client";
import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import tutor3 from "../../../public/tutor3.png";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor3,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#ffd449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12">
          Depoimentos dos nossos clientes
        </h2>
        <div className="relative max-w-4xl mx-auto mt-22">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex" data-aos="zoom-out-up">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0  px-4">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full select-none"
                        />
                      </div>
                      <p className="mt-3 select-none">{item.content}</p>
                      <div className="mt-3 select-none">
                        <p className="font-bold select-none">{item.author}</p>
                        <p className="text-sm text-gray-300 select-none">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full cursor-pointer absolute w-10 h-10 -left-2 -translate-y-1/2 -traslate-x-1/2 top-1/2 z-10 hover:opacity-70 duration-500 shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)]"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 " />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full cursor-pointer absolute w-10 h-10 -right-2 -translate-y-1/2 -traslate-x-1/2 top-1/2 z-10 hover:opacity-70 duration-500 shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)]"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 " />
          </button>
        </div>
      </div>
    </section>
  );
}
