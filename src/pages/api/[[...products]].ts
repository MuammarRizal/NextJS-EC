// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataByID } from "@/lib/firebase/service";
import { DataProduct } from "@/types/Products.type";
import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse<DataProduct>
) {
  if (req.query.products![1]) {
    const productDetail = await retrieveDataByID(
      "products",
      req.query?.products![1]
    );

    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Get detail Product Success",
      products: productDetail,
    });
  }
  const products = await retrieveData("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "Get All Products Success",
    products,
  });
}
