import React from 'react'
import EntriesList from '@/app/components/entrieslist'


export default async function ToledoEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const rawpath = `toledo/${subcategory}`;
    const path : string = rawpath.replace(',', '/');
    return <EntriesList name = {path} />;
}