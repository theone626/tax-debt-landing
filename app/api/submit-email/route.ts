import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Here you would typically send the email to your CRM or email service
    // For now, we'll just return a success response
    console.log('Received email:', email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing email:', error);
    return NextResponse.json(
      { error: 'Failed to process email' },
      { status: 500 }
    );
  }
} 