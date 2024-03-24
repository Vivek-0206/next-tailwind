import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('accessToken')?.value
    console.log("currentUser")
}