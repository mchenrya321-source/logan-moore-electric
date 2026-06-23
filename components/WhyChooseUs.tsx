import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-gray-border bg-navy py-10 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:mt-3 sm:text-4xl">
            The Logan Moore Electric Difference
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
            When you hire a local electrician, you deserve someone who shows up,
            communicates clearly, and delivers quality work.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:p-6"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red text-white sm:mb-4 sm:h-10 sm:w-10">
                <span className="text-sm font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
