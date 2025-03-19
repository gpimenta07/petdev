
import React from "react";
import Image from "next/image";
import about1 from "../../../public/about-1.png";
import Check from "../../../public/check.png";
import Loc from "../../../public/loc.png";
import about2 from "../../../public/about-2.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="bg-[#FDF6ec] py-16" data-aos="fade-right">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-400"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-2xl border-4 border-white overflow-hidden">
              <Image
                src={about2}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Até que alguém tenha amado um animal, uma parte de sua Alma
              permanece adormecida. Acreditamos nela e acreditamos no fácil
              acesso a coisas que são boas para nossa mente, corpo e espírito.
              Com um suporte de oferta inteligente e um checkout de segurança
              você está em boas mãos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-1.5">
                <Image alt="check-icone" className="w-7 h-7" src={Check} />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-1.5">
                <Image alt="check-icone" className="w-7 h-7" src={Check} />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-1.5">
                <Image alt="check-icone" className="w-7 h-7" src={Check} />
                Qualidade é nossa prioridade
              </li>
            </ul>
            <div className="flex gap-3">
              <a href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`} target="_blank">
                <Button className="bg-[#E84C3D] cursor-pointer duration-300 hover:bg-red-900">
                  <WhatsappLogo className="w-5" />
                  Contato Via Whatssap
                </Button>
              </a>
              <a href={`https://maps.app.goo.gl/bmHKgkRcDg9VrWzq9`} target="_blank">
                <Button className="cursor-pointer duration-300">
                  <Image src={Loc} alt="icone-localização" className="w-5" />{" "}
                  Endereço da loja
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
