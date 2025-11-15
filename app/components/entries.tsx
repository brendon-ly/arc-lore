import React from 'react'
import EntriesList from './entrieslist';
import EntryContent from './entrycontent';

type EntriesProps = {
  name: string;
};

export default function Entries({name}: EntriesProps) {
    return (
  <>
    <EntryContent name= {name} />
    <EntriesList name = {name} />
  </>
);
}