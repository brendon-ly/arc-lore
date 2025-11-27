import React from 'react'
import Entries from '@/app/components/entries';
export const dynamic = 'force-dynamic';


export default function ToledoPage() {
  const path = "toledo";
  return <Entries name = {path} />;
}

