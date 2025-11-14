import React from 'react'
import Entries from '@/app/components/entries'


export default async function HistoryEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const rawpath = `history/${subcategory}`;
    const path : string = rawpath.replace(',', '/');
    return <Entries name = {path} />;
}