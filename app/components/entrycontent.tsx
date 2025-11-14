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

type Props = {
  name: string;
};

export default async function EntryContent({name}: Props) {
    const parts = name.split("/").filter(Boolean);
    const cat = parts[0];
    const subcat = parts[1];
    const ent = parts[2];

    const api = `http://localhost:3000/api/lore/${cat}`
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();
    const activeLore = lores.find((lore) => lore.subcategory === subcat);
    const entry = activeLore?.entries.find(e => e.name = ent);

    return (
        <div className="">

        </div>
    )
}