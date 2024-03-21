import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { ImageResponse } from 'next/og'
import { Inter } from 'next/font/google'

export const runtime = 'edge'

const inter = Inter({ subsets: ['latin'] })

export async function GET(request: NextRequest) {
  const fontData = await fetch('https://hackedfont.com/HACKED.ttf').then((res) => res.arrayBuffer())
  const hostname = request.nextUrl.searchParams.get('hn') || 'placehold.pages.dev'
  return new ImageResponse(
    (
      <div style={{ backgroundColor: 'black', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100%'}}>
          <img src="https://placehold.pages.dev/logo.png" alt="logo" style={{ width: '350px', height: '350px' }} />
          <h1 style={{ fontFamily: 'HACKED', fontSize: '9rem', }}>{hostname}</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'HACKED', data: fontData, style: 'normal'},

      ]
    }
  );
}
