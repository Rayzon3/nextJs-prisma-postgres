// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method !== 'POST'){
    return res.status(405).json({ message: "Method not allowed!" })
  }

  try {
    const userData: Prisma.usersCreateInput = JSON.parse(req.body)
    const savedUser = await prisma.users.create({
      data: userData
    })
    return res.status(200).json(savedUser)
  } catch (err) {
    res.status(400).json({message: "Oops! Something went wrong."})
  }

}