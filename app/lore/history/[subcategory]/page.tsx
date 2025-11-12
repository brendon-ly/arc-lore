import React from 'react'
import Entries from '@/app/components/entries'


export default async function HistoryEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const path = `history/${subcategory}`;
    return <Entries name = {path} />;
}