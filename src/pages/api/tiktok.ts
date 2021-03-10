import { updateTiktok, getTiktok } from "~lib/db";
import { getTiktokUser } from "~lib/tiktok";

export default async (req, res) => {
  try {
    const user = await getTiktokUser();
    const { data } = await getTiktok();

    if (JSON.stringify(data) !== JSON.stringify(user)) {
      await updateTiktok(user);
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
