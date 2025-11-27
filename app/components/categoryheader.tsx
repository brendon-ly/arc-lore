"use client";
import { usePathname } from "next/navigation"

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
        <div className="mr-99 ml-102 mt-20 pb-5 border-b">
            <div className="font-bold uppercase text-3xl sm:text-4xl md:text-5xl">
                {currentSubCat ?
                <div>{currentCat} \\ {currentSubCat}</div>
                :
                <div>{currentCat}</div>
                }
            </div>
        </div>
    );
}