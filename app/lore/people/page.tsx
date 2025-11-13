import React from 'react'
import EntriesList from '@/app/components/entrieslist'


export default function PeoplePage() {
  const path = "people";
  return <EntriesList name = {path} />;
}

