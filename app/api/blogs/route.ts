import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { client } from '@/libs/client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Number(searchParams.get('limit')) || 4;
    const response = await client.get({
      endpoint: 'blogs',
      queries: { limit },
    });
    return NextResponse.json(response);
  } catch (err) {
    console.error('Blog fetch error:', err);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
