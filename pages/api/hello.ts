// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {readFileSync} from 'fs'

export type Data = {
  name: string,
  num: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  
) {
  let randomnumber=Math.random();
  const result = await readFileSync("../../Remember-Tradional-Hanzi-1.txt","utf-8")
  res.setHeader(

    'Cache-Control','public, max-age=9999999999, must-revalidate'
  ).status(200).json({ name: 'John Doe',num:randomnumber })
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert'+ randomnumber,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}
