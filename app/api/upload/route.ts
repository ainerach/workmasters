import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, filename } = body;
    if (!data) return NextResponse.json({ error: 'No image data provided' }, { status: 400 });

    // data should be a data URI (base64) or a remote URL
    const uploadResult = await cloudinary.uploader.upload(data, {
      folder: 'workmasters',
      use_filename: true,
      unique_filename: false,
      resource_type: 'image'
    });

    return NextResponse.json({ ok: true, result: uploadResult });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
