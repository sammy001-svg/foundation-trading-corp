import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // TODO: Integrate with an email service like Resend, SendGrid, or AWS SES
    // For now, we'll log the inquiry and return a success response
    console.log("Contact Form Inquiry Received:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Inquiry received successfully. Our team will contact you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
