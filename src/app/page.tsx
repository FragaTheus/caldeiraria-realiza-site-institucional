import Image from "next/image";
import logo from "@/assets/logo.png";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-svh w-screen overflow-hidden flex items-center justify-center bg-linear-130 from-background via-white to-background p-8">
      <div className="w-full max-w-xl min-h-max gap-8 flex flex-col items-center justify-center">
        <div className="w-full h-40 flex items-center justify-center">
          <Image
            src={logo}
            alt="Logo Caldeiraria Realiza"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1>Em breve</h1>
          <p className="text-muted-light text-center text-small md:text-p">
            Caldeiraria especializada em estruturas metálicas, soldas
            industriais e serviços de usinagem de precisão. Qualidade,
            resistência e compromisso com prazos em cada projeto.
          </p>
        </div>
        <div className="h-px w-full bg-linear-to-r from-primary via-muted to-primary" />

        <div className="flex flex-col gap-8 w-full max-w-2xl">
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

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
              <PhoneIcon className="size-5 text-muted" />
              <p className="text-muted-light text-small md:text-p">
                (11) 4040-5589
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <MapPinIcon className="size-7 text-muted lg:left-30" />
              <div className="flex flex-col items-center justify-centers">
                <p className="text-small md:text-p text-muted-light">
                  Av. das Monções, Nº 50, 08592-150
                </p>
                <p className="text-small md:text-p text-muted-light">
                  Itaquaquecetuba São Paulo - Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
