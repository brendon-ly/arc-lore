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
                    ml-4 sm:ml-4 md:ml-10 lg:ml-102
                    mr-4 sm:mr-4 md:mr-90
                    mt-6">
      <div className="w-full sm:w-40 lg:w-58
                      border-r
                      h-[20vh] sm:h-[30vh] md:h-[52vh]
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