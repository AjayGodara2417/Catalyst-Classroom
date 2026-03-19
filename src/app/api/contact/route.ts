import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Request Body:", body)

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        template_params: body
      })
    })

    const text = await response.text()
    console.log("EmailJS Response:", text)

    return Response.json({ success: true })

  } catch (error) {
    console.error("SERVER ERROR:", error)
    return Response.json({ error: "Server error" }, { status: 500 })
  }
}