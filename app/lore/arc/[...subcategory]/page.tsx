import React from 'react'
import EntriesList from '@/app/components/entrieslist'


export default async function ArcEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const rawpath = `arc/${subcategory}`;
    const path : string = rawpath.replace(',', '/');
    return <EntriesList name = {path} />;
}