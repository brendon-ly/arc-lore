import React from 'react'
import Entries from '@/app/components/entries';
export const dynamic = 'force-dynamic';

export default function HistoryPage() {
  const path = "history";
  return <Entries name = {path} />;
}

