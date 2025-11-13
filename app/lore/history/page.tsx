import React from 'react'
import EntriesList from '@/app/components/entrieslist'


export default function HistoryPage() {
  const path = "history";
  return <EntriesList name = {path} />;
}

