// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const blogList: any[] = serverRuntimeConfig.blogList;
  const data =
    blogList.find((x) => x.timesStamp === Number(req.query.id)) || {};
  res.status(200).json({
    success: true,
    data,
  });
}
