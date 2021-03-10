import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = Twilio(accountSid, authToken);

export { client };
