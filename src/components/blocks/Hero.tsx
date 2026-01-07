import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "@/types/content";

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  button,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base text-white/90 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8">
            <Link
              href={button.url}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              {button.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
