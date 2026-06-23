"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_IMAGE_PRIMARY = "/gallery/3.jpg";
const HERO_IMAGE_FALLBACK = "/gallery/4.jpg";

export default function HeroBackground() {
  const [src, setSrc] = useState(HERO_IMAGE_PRIMARY);
  const objectPosition =
    src === HERO_IMAGE_FALLBACK ? "center center" : "center 35%";

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      sizes="100vw"
      quality={80}
      className="object-cover"
      style={{ objectPosition }}
      onError={() => {
        if (src !== HERO_IMAGE_FALLBACK) {
          setSrc(HERO_IMAGE_FALLBACK);
        }
      }}
    />
  );
}
