import FileModel from "@/models/Files";
import { dbConnect } from "@/utils/dbConnect";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await dbConnect();
    const data = await req.formData();
    const file = data.get("file");
    const title = data.get("title");
    if (!file) {
      return NextResponse.json({ message: "No file found", success: false });
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileName = file.name; // Extracting file name

    const path = `./public/${fileName}`;

    // Save file to server
    await writeFile(path, buffer);

    // Save file data to database with only the file name
    const newFile = new FileModel({ fileName, title }); // Saving only the file name
    await newFile.save();
    console.log(fileName, title);
    return NextResponse.json({ message: "File upload success" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred", success: false });
  }
}
