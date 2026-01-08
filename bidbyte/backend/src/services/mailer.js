import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendWinnerMail = async ({ to, name, title, amount }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: `🎉 You won the auction: ${title}`,
    html: `
      <div style="font-family: Arial, sans-serif">
        <h2>Congratulations ${name} 🎉</h2>
        <p>You have won the auction <b>${title}</b>.</p>
        <p><b>Winning bid:</b> ₹${amount}</p>
        <p>Please visit BidByte to see your auction info.</p>
        <br />
        <p>— BidByte Team</p>
      </div>
    `,
  });
};