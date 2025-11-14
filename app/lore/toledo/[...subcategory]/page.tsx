import React from 'react'
import Entries from '@/app/components/entries'


export default async function ToledoEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const rawpath = `toledo/${subcategory}`;
    const path : string = rawpath.replace(',', '/');
    return <Entries name = {path} />;
}