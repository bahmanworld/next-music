import { createReadStream, statSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

const music = 'music.mp3'

const stat = statSync(music);

const handler = async (req: NextRequest) => {

  const stream = createReadStream(music);

  return new NextResponse(stream as any, {
    headers: {
      "content-type": "audio/mpeg",
      "content-length": stat.size.toString()
    },
  });
};


export {handler as GET, handler as POST}