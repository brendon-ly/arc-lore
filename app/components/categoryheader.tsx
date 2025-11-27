"use client";
import { usePathname } from "next/navigation"
import Link from "next/link";

export default function CategoryHeader() {
    const pathname = usePathname();
    
    const parts = pathname.split("/").filter(Boolean);
    const currentCat = parts[1];
    let currentSubCat;
    if(parts?.length > 1){
        currentSubCat = parts[2];
        currentSubCat = currentSubCat?.replace(/-/g, " ");
    }

    return (
        <div className="mt-20 pb-5 border-b
      ml-4 sm:ml-4 md:ml-10 lg:ml-102
      mr-4 sm:mr-4 md:mr-90">
            <div className="font-bold uppercase text-3xl sm:text-4xl md:text-5xl">
                {currentSubCat ?
                <div><Link href={`/lore/${currentCat}`}>{currentCat}</Link> \\ {currentSubCat}</div>
                :
                <div>{currentCat}</div>
                }
            </div>
        </div>
    );
}