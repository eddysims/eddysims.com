import { updateTiktok, getTiktok } from "~lib/db";
import { getTiktokUser } from "~lib/tiktok";
import { client } from "~lib/twilio";

// client.messages.create({
//   to: "+17804981332",
//   from: "+19044415262",
//   body: `
//     Since the last update you have:
//     ✅ ${followersMessage(data.profile, user)}
//     💚 ${likesMessage(data.profile, user)}
//   `,
// });

// if (JSON.stringify(data.profile) !== JSON.stringify(user)) {
//   await updateTiktok(user);
//   client.messages.create({
//     to: "+17804981332",
//     from: "+19044415262",
//     body: "Something happened 2",
//   });
// }

export default async (req, res) => {
  try {
    const user = await getTiktokUser();
    const { data } = await getTiktok();

    if (
      data.stats.followerCount !== user.stats.followerCount ||
      data.stats.heartCount !== user.stats.heartCount
    ) {
      await updateTiktok(user);
      client.messages.create({
        to: "+17804981332",
        from: "+19044415262",
        body: `
-----
Since the last update you have:
✅ ${followersMessage(data, user)}
💚 ${likesMessage(data, user)}
        `,
      });
    }
    //   tiktok: user.stats.followerCount,
    // });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};

function followersMessage(profile, tiktok) {
  const difference = tiktok.stats.followerCount - profile.stats.followerCount; // 9 - 8

  return `${difference >= 0 ? "Gained" : "Lost"} ${
    difference >= 0 ? difference : difference * -1
  } followers for a total of ${tiktok.stats.followerCount} followers`;
}

function likesMessage(profile, tiktok) {
  const difference = tiktok.stats.heartCount - profile.stats.heartCount; // 9 - 8

  return `${difference >= 0 ? "Gained" : "Lost"} ${
    difference >= 0 ? difference : difference * -1
  } likes for a total of ${tiktok.stats.heartCount} likes`;
}
