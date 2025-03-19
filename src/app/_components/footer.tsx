import royal from "../../../public/royal.png";
import golden from "../../../public/golden.png";
import primier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import whiskas from "../../../public/whiskas.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FacebookLogo,
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
  ];

  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-4xl font-bold mb-8 text-center">
            Nossos parceiros
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 text-center lg:grid-cols-3">
          <div>
            <div className="mt-5">
              <p className="text-2xl font-bold mb-5">Pet Shop</p>
              <p>Cuidando do seu melhor amigo com amor e dedicação.</p>
              <a
                href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`}
                target="_blank"
              >
                <Button className="shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] w-fit cursor-pointer bg-green-600 hover:bg-green-700 duration-400 mt-5">
                  <WhatsappLogo />
                  Contato Via WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <p className="text-2xl font-bold mb-5">Contato</p>
            </div>
            <p>
              Rua dos Pets, 123 <br />
              Cidade, Estado - CEP: 12345-740 <br /> Tel: (21) 99924-5612 <br />
              Email: contato@petshop.com
            </p>
          </div>

          <div className="mt-5">
            <p className="text-2xl font-bold mb-5">Redes Sociais</p>
            <div className="flex items-center justify-center gap-5">
              <a
                href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`}
                target="_blank"
              >
                <FacebookLogo className="hover:opacity-60 duration-300 w-8 h-8" />
              </a>
              <a
                href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`}
                target="_blank"
              >
                <InstagramLogo className="hover:opacity-60 duration-300 w-8 h-8" />
              </a>
              <a
                href={`https://wa.me/5521980284425?text=Olá, vim pelo site e gostaria de mais informações.`}
                target="_blank"
              >
                <YoutubeLogo className="hover:opacity-60 duration-300 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
