import * as TikTokScraper from "tiktok-scraper";

export async function getTiktokUser() {
  const user = await TikTokScraper.getUserProfileInfo("eddysims");
  return user;
}
