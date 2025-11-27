import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-t py-4">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-15 uppercase text-lg">
                <Divider />
                <Link href="/">Home</Link>
                <Divider />
                <Link href="/lore/history">History</Link>
                <Divider />
                <Link href="/lore/people">People</Link>
                <Divider />
                <Link href="/lore/toledo">Toledo</Link>
                <Divider />
                <Link href="/lore/arc">Arc</Link>
                <Divider />
                <Link href="/lore/topside">Topside</Link>
                <Divider />
            </nav>
        </header>
    );
}

function Divider() {
    return (
        <div className="hidden sm:block h-6 w-px bg-neutral-400 dark:bg-white/20"></div>
    );
}