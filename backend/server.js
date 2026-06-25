import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";

// Load configuration variables from your .env file
dotenv.config();

const app = express();

// ─── MIDDLEWARE SETUP (CRITICAL FOR CONNECTION) ───
// Allows your React app (on port 5173/3000) to safely talk to port 5000
app.use(cors()); 
// Allows Express to parse JSON bodies sent via fetch body
app.use(express.json());

// Initialize Resend using the token from your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── NEW: DEFAULT GET ROUTE FOR BROWSER STATUS VERIFICATION ───
app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #0b0f19; color: #fff; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;">
      <h1 style="color: #06b6d4; font-size: 2.5rem; margin-bottom: 10px;">🚀 Saras' Portfolio Backend</h1>
      <p style="color: #9ca3af; font-size: 1.2rem;">Server execution layer is live and waiting for form submissions!</p>
      <div style="margin-top: 20px; padding: 10px 20px; border-radius: 20px; background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.2); color: #22d3ee; font-family: monospace;">
        Status: ACTIVE on Port 5000
      </div>
    </div>
  `);
});

// ─── NEW: HEALTH ROUTE TO VERIFY ENVIRONMENT VARIABLES ───
app.get("/api/health", (req, res) => {
  const isApiKeyLoaded = !!process.env.RESEND_API_KEY;
  res.status(isApiKeyLoaded ? 200 : 500).json({
    status: isApiKeyLoaded ? "UP" : "DOWN",
    resend_initialized: isApiKeyLoaded,
    timestamp: new Date()
  });
});

// ─── EMAIL TARGET POST ROUTE ───
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Quick structural validation gate
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "Missing required form fields." 
    });
  }

  try {
    const data = await resend.emails.send({
      // Resend testing sandbox email (Change once you verify a custom domain)
      from: "Portfolio Contact <onboarding@resend.dev>",
      // The destination inbox where you want to read incoming contact forms
      to: "saraspatil237@gmail.com", 
      subject: `📬 Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2>New Contact Form Entry</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <br />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #06b6d4; border-radius: 4px;">
            ${message}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// ─── STARTUP LIFECYCLE ───
const PORT = 5005;
app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Failed to bind to server execution layer:", err);
  } else {
    console.log(`🚀 Server successfully executing on: http://localhost:${PORT}`);
  }
});