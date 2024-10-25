import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  console.log('fetching images');
  try {
    const result = await cloudinary.v2.search
      .expression('folder:wedding/*') // Thay đổi 'wedding' thành tên folder của bạn
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

