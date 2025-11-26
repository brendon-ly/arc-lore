import Link from "next/link";

export default function Header() {
    return (
        <header className="isolate border-t-2 top-0">
            <div className="mx-auto w-fit">
                <div className="flex flex-row gap-x-20 justify-evenly pt-6 uppercase text-lg static">
                    <Link href="/">Home</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <Link href="/lore/history">History</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <Link href="/lore/people">People</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <Link href="/lore/toledo">Toledo</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <Link href="/lore/arc">Arc</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                    <Link href="/lore/topside">Topside</Link>
                    <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
                </div>
            </div>
        </header>
    );
}