import React from 'react'
import EntriesList from '@/app/components/entrieslist'


export default async function TopsideEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const rawpath = `topside/${subcategory}`;
    const path : string = rawpath.replace(',', '/');
    return <EntriesList name = {path} />;
}