"use client";
import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

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

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16" data-aos="zoom-in-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-4"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-3xl">{item.icon}</span>
                          <h3 className="font-bold my-1 text-xl select-none">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                                  className="flex items-center gap-1.5 duration-500 hover:bg-green-600 px-4 py-1 rounded-2xl justify-center"
                                   href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações sobre ${item.title}.`} target="_blank"
                      >
                        Entrar em Contato <WhatsappLogo className="w-5 h-5" />
                      </a>
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
