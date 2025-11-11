"use client";
import { usePathname } from "next/navigation"

export default function PathGetter() : string{
    const pathname = usePathname();
    
    const parts = pathname.split("/").filter(Boolean);
    const currentPage = parts[1];
    
    return currentPage;
}