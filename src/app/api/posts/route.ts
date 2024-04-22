import Post from "@/models/Post";
import { dbCon } from "@/utils/postDbCon";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    await dbCon();
    const newData = new Post({ title });
    await newData.save();

    return NextResponse.json({
      message: "Post created successfully",
    });
  } catch (error: any) {
    console.error("Error creating post:", error);
    return NextResponse.json(new Error("Failed to create post"), {
      status: 500,
    });
  }
}
