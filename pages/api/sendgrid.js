import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "i.merzouk@esi-sba.dz", // Your email where you'll receive emails
      from: "merzouk.ilyase@gmail.com", // your website email address here
      subject: `Portfolio's contact form`,
      html: `<div>You've got a mail from: ${req.body.name},their Email is:  ${req.body.email} <br/> 
      <h1> ${req.body.message} </h1>
      </div>`,
    });
  } catch (error) {
     console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
