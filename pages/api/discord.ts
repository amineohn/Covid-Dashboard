import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { User } from "../../libs/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
  han: NextApiHandler<NextApiHandler>
) {
  const code = req.query.code;
  console.log(code);
  if (!code) console.log("No Code found in callback");

  const data = new URLSearchParams({
    client_id: "923472702365380628",
    client_secret: "3SDVuIPf0d9Y6wmqGR_mtkp77I7iMcIt",
    grant_type: "authorization_code",
    code: code as string,
    redirect_uri: `http://localhost:3001/callback`,
    scope: ["identify", "guilds.join"].join(" "),
  });

  const test = fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  res.status(200).json(await test.then((r) => r.json()));
}
