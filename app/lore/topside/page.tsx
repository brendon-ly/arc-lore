import React from 'react'
import EntriesList from '@/app/components/entrieslist'
export const dynamic = 'force-dynamic';


export default function TopsidePage() {
  const path = "topside";
  return <EntriesList name = {path} />;
}

