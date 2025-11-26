import React from 'react'
import EntriesList from '@/app/components/entrieslist'
export const dynamic = 'force-dynamic';


export default function ArcPage() {
  const path = "arc";
  return <EntriesList name = {path} />;
}


