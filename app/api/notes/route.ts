import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const notesDirectory = path.join(process.cwd(), 'content', 'notes');
    const files = await fs.readdir(notesDirectory);
    
    const notes = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace('.md', '');
        return {
          title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          href: `/notes/${slug}`
        };
      });

    return NextResponse.json(notes);
  } catch {
    return NextResponse.json({ error: 'Failed to read notes directory' }, { status: 500 });
  }
} 