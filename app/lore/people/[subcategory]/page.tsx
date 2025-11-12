import React from 'react'
import Entries from '@/app/components/entries'


export default async function PeopleEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const path = `people/${subcategory}`;
    return <Entries name = {path} />;
}