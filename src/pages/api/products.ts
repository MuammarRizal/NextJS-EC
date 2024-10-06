// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/firebase/service";
import { DataProduct } from "@/types/Products.type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse<DataProduct>
) {
  const products = await retrieveData("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "Get All Products Success",
    products,
  });
}
