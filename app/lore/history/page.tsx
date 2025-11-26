import React from 'react'
import EntriesList from '@/app/components/entrieslist'
export const dynamic = 'force-dynamic';

export default function HistoryPage() {
  const path = "history";
  return <EntriesList name = {path} />;
}

