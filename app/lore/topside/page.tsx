import React from 'react'
import Entries from '@/app/components/entries';
export const dynamic = 'force-dynamic';


export default function TopsidePage() {
  const path = "topside";
  return <Entries name = {path} />;
}

