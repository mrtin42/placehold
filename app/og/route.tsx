import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const fontData = await fetch('https://hackedfont.com/HACKED.ttf').then((res) => res.arrayBuffer())
  const hostname = request.nextUrl.searchParams.get('hn') || 'placehold.pages.dev'
  return new ImageResponse(
    (
      <div style={{ backgroundColor: 'black', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100%'}}>
          <img src="https://placehold.pages.dev/logo.png" alt="logo" style={{ width: '200px', height: '200px' }} />
          <h1 style={{ fontFamily: 'HACKED', fontSize: '2rem', marginLeft: '1rem' }}>{hostname}</h1>
          <p style={{ fontSize: '1rem', marginLeft: '1rem' }}>Parked by MartinDEV</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'HACKED', data: fontData, style: 'normal'}
      ]
    }
  );
}
