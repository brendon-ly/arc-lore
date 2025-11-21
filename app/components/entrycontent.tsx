import Image from "next/image";

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

type Props = {
  name: string;
};

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}


export default async function EntryContent({name}: Props) {
    const parts = name.split("/").filter(Boolean);
    const cat = parts[0];
    const subcat = parts[1];
    const ent = parts[2];

    const api = `http://localhost:3000/api/lore/${cat}`
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();
    const activeLore = lores.find((lore) => slugify(lore.subcategory) === slugify(subcat))
    const entry = activeLore?.entries.find(e => slugify(e.name) === ent);

    return (
        <div className="absolute ml-159 mt-4 mr-99 pl-5">
            <div className="font-bold uppercase text-3xl">{entry?.name}</div>
            <div className="h-112 mt-4 pr-5 whitespace-pre-line overflow-auto"><p>{entry?.desc}</p></div>
        </div>
    )
}