import Image from "next/image";
import logo from "@/assets/logo.png";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-svh w-screen overflow-hidden flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-xl min-h-max gap-8 flex flex-col items-center justify-center">
        <div className="h-30 md:h-50 flex items-center justify-center">
          <Image
            src={logo}
            alt="Logo Caldeiraria Realiza"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h2>Realiza Caldeiraria</h2>
          </div>
          <p className="text-muted-light text-center">
            Desde 2015, a Realiza atua em caldeiraria, soldagem industrial e
            usinagem de precisão, com certificação NBR ISO 9001:2015. Atendemos
            empresas que exigem rigor técnico, prazo e rastreabilidade em cada
            etapa do processo.
          </p>
        </div>
        <div className="relative w-full">
          <div className="h-px w-full bg-linear-to-r from-primary via-muted to-primary" />
          <div className="bg-background absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
            <p className="">Fale conosco</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <div className="grid grid-cols-3 items-center justify-items-center w-1/2 self-center gap-2">
            <Link
              href={"https://www.instagram.com/realizacaldeiraria"}
              title="@realizacaldeiraria"
              className="flex gap-2 text-primary bg-primary/5 p-2 rounded-sm hover:scale-102 hover:bg-linear-130 hover:from-[#feda75] hover:via-[#fa7e1e] hover:to-[#9b36b7] hover:text-white transition-all active:scale-98 active:bg-linear-130 active:from-[#feda75] active:via-[#fa7e1e] active:to-[#9b36b7] active:text-white"
            >
              <FaInstagram className="size-6" />
            </Link>

            <Link
              href={"https://www.facebook.com/realizacaldeiraria"}
              title="Realiza Caldeiraria"
              className="flex gap-2 text-primary bg-primary/5 p-2 rounded-sm hover:scale-102 hover:bg-white transition-all active:scale-98 active:bg-white"
            >
              <FaFacebook className="size-6" />
            </Link>

            <Link
              href={"https://wa.me/5511953319812"}
              title="(11) 95331-9812"
              className="flex gap-2 text-primary bg-primary/5 p-2 rounded-sm hover:scale-102 hover:bg-green-300 transition-all active:scale-98 active:bg-green-400 hover:text-white active:text-white"
            >
              <FaWhatsapp className="size-6" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="flex relative">
              <PhoneIcon className="size-5 text-muted absolute -translate-x-8 -translate-y-1/2 top-1/2" />
              <p className="text-muted-light  col-span-2">(11) 4040-5589</p>
            </div>

            <div className="flex relative">
              <MapPinIcon className="size-7 text-muted absolute -translate-x-10 -translate-y-1/2 top-1/2" />
              <div className="flex flex-col items-center justify-centers col-span-4">
                <p className=" text-muted-light">
                  Av. das Monções, Nº 50, 08592-150
                </p>
                <p className=" text-muted-light">
                  Itaquaquecetuba São Paulo - Brasil
                </p>
              </div>
            </div>
            <small className="text-center text-muted-light opacity-50">
              © 2025 Realiza Caldeiraria, Usinagem e Serviços. Todos os direitos
              reservados.
            </small>
          </div>
        </div>
      </div>
    </main>
  );
}
