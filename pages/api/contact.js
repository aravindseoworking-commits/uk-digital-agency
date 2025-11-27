export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, phone, message } = req.body
  // For now just accept and respond. Replace with mail service integration.
  console.log('Contact form:', { name, email, phone, message })
  // Send an email here using SendGrid / Nodemailer (configure on server)
  res.status(200).json({ ok: true, message: 'Thanks — we received your message.' })
}
