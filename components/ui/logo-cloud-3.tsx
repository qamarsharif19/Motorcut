import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoCloudProps {
  logos: Logo[];
}

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative h-8 w-32 grayscale transition hover:grayscale-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}