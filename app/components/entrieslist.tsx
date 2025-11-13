import Link from "next/link";

type Entry = {
    id: number;
    name: string;
    image: string;
    desc: string;
}

type LoreData = {
  id: number;
  subcategory: string;
  entries: Entry[];
}

type EntriesProps = {
  name: string;
};

export default async function EntriesList({name}: EntriesProps) {
    const parts = name.split("/").filter(Boolean);
    const cat = parts[0];
    const subcat = parts[1];
    const ent = parts[2];                                              //cat - Category, subcat - SubCategory, ent - Entry
    let entriesCheck: boolean = false

    const api = `http://localhost:3000/api/lore/${cat}`
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();
    let activeLore;

    if (parts.length > 1)  {
        entriesCheck = true
        activeLore = lores.find((lore) => lore.subcategory === subcat)
    }


    if (parts.length > 1) return(
        <ul className="mr-321 ml-102 mt-10 gap-5 flex flex-col flex-nowrap justify-start justify-items-start items-start text-xl uppercase border-r">
            {activeLore?.entries.map((entry) => (
                <li key={entry.id}>
                    <Link href={`/lore/${cat}/${activeLore.subcategory}/${entry.name}`}>{entry.name}</Link>
                </li>
            ))}
        </ul>
    )
    
    return (
        <ul className="mr-321 ml-102 mt-10 gap-5 flex flex-col flex-nowrap justify-start justify-items-start items-start text-xl uppercase border-r">
            {entriesCheck ?
            activeLore?.entries.map((entry) => (
                <li key={entry.id}>
                    <Link href={`/lore/${cat}/${activeLore.subcategory}/${entry.name}`}>{entry.name}</Link>
                </li>
            ))

            :           //Need to fix whitespace for links

            lores.map((lore) => (
                <li key={lore.id}>
                    <Link href={`/lore/${cat}/${lore.subcategory}`}>{lore.subcategory}</Link>
                </li>
            ))
            }
        </ul>
    )

}