import React from 'react'
import EntriesList from './entrieslist';
import EntryContent from './entrycontent';

type EntriesProps = {
  name: string;
};

export default function Entries({name}: EntriesProps) {
    return (
  <>
    <EntriesList name = {name} />
    <EntryContent name= {name} />
  </>
);
}