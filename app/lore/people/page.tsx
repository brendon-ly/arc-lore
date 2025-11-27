import React from 'react'
import Entries from '@/app/components/entries';
export const dynamic = 'force-dynamic';


export default function PeoplePage() {
  const path = "people";
  return <Entries name = {path} />;
}

