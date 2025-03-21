import { NextResponse } from 'next/server'
import { API_KEYS, API_ENDPOINTS } from '@/lib/api-config'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const apiUrl = 'https://newsapi.org/v2/top-headlines'
    
    // Construct the News API URL with the search parameters
    const params = new URLSearchParams()
    if (searchParams.toString()) {
      params.append('apiKey', 'c80d98c29c0845d984a2aa8a7866b6a1')
      Array.from(searchParams).forEach(([key, value]) => {
        params.append(key, value)
      })
    } else {
      params.append('apiKey', 'c80d98c29c0845d984a2aa8a7866b6a1')
    }
    
    console.log(`${apiUrl}?${params.toString()}`)

    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.status === 'error') {
      return NextResponse.json(
        { error: data.message || 'Failed to fetch news' },
        { status: 400 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('News API Error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

