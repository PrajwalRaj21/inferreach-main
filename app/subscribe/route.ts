import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Add your email service here (Mailchimp, SendGrid, etc.)
    console.log(`📧 New subscriber: ${email}`)

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })

  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}