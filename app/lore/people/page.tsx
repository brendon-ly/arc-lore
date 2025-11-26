import React from 'react'
import EntriesList from '@/app/components/entrieslist'
export const dynamic = 'force-dynamic';


export default function PeoplePage() {
  const path = "people";
  return <EntriesList name = {path} />;
}

