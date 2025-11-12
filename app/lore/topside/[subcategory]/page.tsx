import React from 'react'
import Entries from '@/app/components/entries'


export default async function TopsideEntriesPage({ params }: { params: Promise<{ subcategory: string }> }) {
    const { subcategory } = await params;
    const path = `topside/${subcategory}`;
    return <Entries name = {path} />;
}