const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const redirectUri =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? "http://localhost:3000/api/auth/callback/google"
    : "https://thrive.lakarencita.com/api/auth/callback/google";
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID, // ClientID
  process.env.GOOGLE_CLIENT_SECRET, // Client Secret
  redirectUri // Redirect URL
);

export default async function refreshToken(refreshToken: string) {
  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  const accessToken = await oauth2Client.getAccessToken();
  console.log(accessToken);
  return accessToken;
}
