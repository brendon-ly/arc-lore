"use client";
import { usePathname } from "next/navigation"

export default function CategoryHeader() {
    const pathname = usePathname();
    
    const parts = pathname.split("/").filter(Boolean);
    const currentPage = parts[1];

    return (
        <div className="mr-99 ml-102 mt-20 pb-5 border-b">
            <div className="font-bold uppercase text-5xl">
                <div>{currentPage}</div>
            </div>
        </div>
    );
}