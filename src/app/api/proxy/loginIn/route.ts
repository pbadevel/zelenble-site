// app/api/proxy/[...path]/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: {
    path: string[];
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { path } = params;
  const { searchParams } = new URL(request.url);
  
  const targetUrl = `${process.env.API_BASE_URL}/${path.join('/')}?${searchParams}`;

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Authorization': request.headers.get('authorization') || '',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    return NextResponse.json({ data }, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Proxy error', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  const { path } = params;
  const targetUrl = `${process.env.API_BASE_URL}/${path.join('/')}`;
  const body = await request.json();

  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Authorization': request.headers.get('authorization') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return NextResponse.json({ data }, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Proxy error', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}