import Link from "next/link";

type LoreData = {
  id: number;
  subcategory: string;
  entries: Array<{ id:number; name: string; image: string; desc: string;}>;
}

type EntriesProps = {
  name: string;
};

export default async function Entries({name}: EntriesProps) {
    const api = 'http://localhost:3000/api/lore/' + name
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();

    return (
        <ul className="mr-321 ml-102 mt-10 gap-5 flex flex-col flex-nowrap justify-start justify-items-start items-start text-xl uppercase border-r">
            {lores.map((lore) => (
                <li key={lore.id}>
                    <div>{lore.subcategory}</div>
                </li>
            ))}
        </ul>
    )
}