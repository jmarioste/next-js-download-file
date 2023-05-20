import { NextResponse } from "next/server";

// public URL to your aws S3 bucket
const AWS_S3_ENDPOINT = process.env.AWS_S3_ENDPOINT;

export async function GET(req: Request, { params }: any) {
  const file = params.file as string;
  const response = await fetch(`${AWS_S3_ENDPOINT}/uploads/${file}`);
  if (response.ok) {
    return new Response(response.body, {
      headers: {
        "content-type": "application/octet-stream", //use application
      },
    });
  }
  return new NextResponse("", { status: 404, statusText: "Image not found" });
}
