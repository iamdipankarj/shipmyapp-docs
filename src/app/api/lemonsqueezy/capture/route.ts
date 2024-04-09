import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getFormattedError } from "@/lib/errorHandler";
// import crypto from 'crypto';

export const maxDuration = 300;

export const dynamic = 'force-dynamic'

export async function POST(req: Request, _: NextApiResponse) {
  try {
    // const text = await req.text();
    // const hmac = crypto.createHmac("sha256", process.env.LEMONSQUEEZY_WEBHOOK_SECRET!);
    // const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
    // const signature = Buffer.from(req.headers.get("X-Signature") as string, "utf8");

    // if (!crypto.timingSafeEqual(digest, signature)) {
    //   console.log("Invalid Request Signature")
    //   return NextResponse.json(
    //     { data: "Invalid Request Signature" },
    //     { status: 400 }
    //   )
    // }
    
    const body = await req.json()

    if (body?.meta?.event_name === "order_created") {
      const username = body?.meta?.custom_data?.username;

      if (username) {
        let finalResponse = await fetch(`https://api.github.com/repos/shipmyapp/shipmyapp/collaborators/${username}`, {
          method: "PUT",
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
          body: JSON.stringify({
            permission: "read"
          })
        });
        
        if (finalResponse.status !== 201) {
          return NextResponse.json(
            { data: "Error adding collaborator to the repo" },
            { status: 400 }
          )
        }
        return NextResponse.json(
          { data: "Access given" },
          { status: 200 }
        )
      } else {
        return NextResponse.json(
          { data: "No username provided" },
          { status: 400 }
        )
      }
    }
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { data: getFormattedError(e) },
      { status: 400 }
    )
  }
}
