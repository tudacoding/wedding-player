import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'modules', 'wishes', 'listwishes.txt');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    const wishes = fileContent.split('-').map(wish => {
      const parts = wish.trim().split('\n');
      if (parts.length < 2) return null;
      const name = parts[0];
      const content = parts.slice(1).join('\n');
      return {
        sender: name && name.startsWith('Name: ') ? name.replace('Name: ', '').trim() : '',
        content: content && content.startsWith('Wishes: ') ? content.replace('Wishes: ', '').trim() : ''
      };
    }).filter(wish => wish && wish.sender && wish.content);

    return NextResponse.json(wishes);
  } catch (error) {
    console.error('Error reading wishes:', error);
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
  }
}
