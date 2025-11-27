
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

    if (parts.length == 1) return(<p> </p>)

    const api = `https://arc-lore.vercel.app/api/lore/${cat}`
    const response = await fetch(api)
    const lores : LoreData[]  = await response.json();
    const activeLore = lores.find((lore) => slugify(lore.subcategory) === slugify(subcat))
    const entry = activeLore?.entries.find(e => slugify(e.name) === ent);

    return (
        <div className="relative ">
    <div className="font-bold uppercase text-2xl sm:text-3xl mb-4">
      {entry?.name}
    </div>

    <div
      className="
        h-[47vh] md:h-[47vh]
        overflow-auto 
        whitespace-pre-line 
        pr-2
      "
    >
      <p className="text-base md:text-lg leading-relaxed">
        {entry?.desc}
      </p>
    </div>
  </div>
    )
}