//import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <section className="flex flex-col items-center text-center px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 py-50">

          <h1 className="font-bold uppercase text-4xl sm:text-5xl md:text-6xl">
            Enlist. Resist
          </h1>

          <div className="max-w-3xl text-justify text-lg leading-relaxed mt-6">
            <p>
              Generations after a global environmental collapse wiped out most
              of human society, only a few patches of habitable land remained.
              Survivors gathered in makeshift communities within the remnants of
              old cities, as well as in countless small tribes.
              Just as some degree of civilization returned, crude machines
              started falling from the skies. In the Rust Belt, after a decade
              of hard fighting, this First Wave of ARC is eventually held
              back—but not for long.
              Within years, ARC returns with a vengeance. This time, survivors
              are forced underground, into the makeshift community of Speranza.
            </p>

            <br />
            <p>

              But survival is no easy task. Resources are limited, conflicts are
              endless, and competition for survival is fierce. True survival
              means risking the surface to recover supplies.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}

