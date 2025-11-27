import React from 'react'
import EntriesList from './entrieslist';
import EntryContent from './entrycontent';

type EntriesProps = {
  name: string;
};

export default function Entries({name}: EntriesProps) {
    return (
  <>
    <div className="flex flex-col lg:flex-row gap-6
                    ml-4 md:ml-10 lg:ml-102
                    mr-110 md:mr-100
                    mt-6">
      <div className="w-full lg:w-58 shrink-0
                      border-r
                      h-[52vh] md:h-[52vh] 
                      overflow-auto no-scrollbar">
        <EntriesList name = {name} />
      </div>
      <div className="flex-1">
        <EntryContent name= {name} />
      </div>
    </div>
  </>
);
}