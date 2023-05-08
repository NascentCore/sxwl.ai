// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

/**
 * 读取 blog 列表
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const list: any[] = serverRuntimeConfig.blogList;
  res.status(200).json({
    success: true,
    data: list.map((x) => ({ ...x, content: undefined })),
  });
}
