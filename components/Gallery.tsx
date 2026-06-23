import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Our Work
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:mt-3 sm:text-4xl">
            Recent Electrical &amp; Lighting Work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-muted sm:mt-4 sm:text-lg">
            A look at the quality and professionalism we bring to every
            electrical project across Northeast Louisiana.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={`group overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl sm:rounded-xl ${
                index === 0
                  ? "col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-gray-light ${
                  index === 0
                    ? "aspect-[2/1] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]"
                    : "aspect-[4/3] sm:aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
