import { sendEmail } from "@/actions/sendEmail";

import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div>
      <Button onClick={sendEmail} label="Send Email" />
    </div>
  );
}
