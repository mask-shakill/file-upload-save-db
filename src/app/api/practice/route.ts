import Practice from "@/models/Practice";
import { dbCon } from "@/utils/postDbCon";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input1, input2 } = await req.json();
  await dbCon();

  const newData = new Practice({ input1, input2 });
  console.log(newData);
  await newData.save();
  return NextResponse.json({ message: "data save success" });
}
