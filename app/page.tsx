//import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="relative">
      <div className="isolate border-t-2">
        <div className="mx-auto w-fit">
          <div className="flex flex-row gap-x-20 justify-evenly pt-6 uppercase text-lg static">
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <h1>History</h1>
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <h1>People</h1>
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <h1>Toledo</h1>
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <h1>Arc</h1>
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            <h1>Topside</h1>
            <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-65 ">
          <p className="font-bold uppercase text-5xl">Enlist. Resist</p>
          <div className="text-justify py-2 px-50 text-balance mx-120">
            <p>Generations after a global environmental collapse wiped out most of human society, only a few patches of habitable land remained. Survivors gathered in makeshift communities within the remnants of old cities, as well as in countless small tribes.

              Just as some degree of civilization returned, crude machines started falling from the skies. In the Rust Belt, after a decade of hard fighting, this First Wave of ARC is eventually held back—but not for long.

              Within years, ARC returns with a vengeance. This time, survivors are forced underground, into the makeshift community of Speranza.<br></br>
              
              <br></br>But survival is no easy task. Resources are limited, conflicts are endless, and competition for survival is fierce. True survival means risking the surface to recover supplies.</p>
          </div>
      </div>
    </div>
    </main>
  );
}
