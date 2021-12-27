import type { NextApiResponse } from "next";
import { fetchCovid } from "../../libs/covid";
export default async (_: any, res: NextApiResponse) => {
  const response = await fetchCovid();
  const covid = await response.data;
  return res.status(200).json(covid);
};
