import React from 'react'
import Entries from '@/app/components/entries'


export default async function ToledoEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const path = `toledo/${subcategory}`;
    return <Entries name = {path} />;
}