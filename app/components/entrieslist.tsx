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

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default async function EntriesList({name}: EntriesProps) {
    const parts = name.split("/").filter(Boolean);
    const cat = parts[0];
    const subcat = parts[1];                                            //cat - Category, subcat - SubCategory, ent - Entry
    let entriesCheck: boolean = false

    const api = `https://arc-lore.vercel.app/api/lore/${cat}`
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();
    let activeLore;

    if (parts.length > 1)  {
        entriesCheck = true
        activeLore = lores.find((lore) => slugify(lore.subcategory) === slugify(subcat))
    }


    if (parts.length > 1) return(
        <ul
    className="flex flex-col gap-4 text-lg md:text-xl uppercase">
            {activeLore?.entries.map((entry) => (
                <li key={entry.id}>
                    <Link href={`/lore/${cat}/${slugify(activeLore.subcategory)}/${slugify(entry.name)}`}>{entry.name}</Link>
                </li>
            ))}
        </ul>
    )
    
    return (
        <ul
    className="flex flex-col gap-4 text-lg md:text-xl uppercase">
            {entriesCheck ?
            activeLore?.entries.map((entry) => (
                <li key={entry.id}>
                    <Link href={`/lore/${cat}/${slugify(activeLore.subcategory)}/${slugify(entry.name)}`}>{entry.name}</Link>
                </li>
            ))

            :

            lores.map((lore) => (
                <li key={lore.id}>
                    <Link href={`/lore/${cat}/${slugify(lore.subcategory)}`}>{lore.subcategory}</Link>
                </li>
            ))
            }
        </ul>
    )

}