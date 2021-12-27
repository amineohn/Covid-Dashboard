import type { NextApiResponse } from "next";
import { fetchByDepartement, fetchCovid } from "../../libs/covid";
export default async (_: any, res: NextApiResponse) => {
  const response = await fetchByDepartement();
  // const response2 = await fetchByDepartement();
  const covid = await response.data;
  // const departement = await response2.data;
  res.status(200).json(covid);
  //res.status(200).json({ departement });
};
