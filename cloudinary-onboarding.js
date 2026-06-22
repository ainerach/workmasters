const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with inline credentials
cloudinary.config({
  cloud_name: 'dpen5hvo7',      // ← your cloud name
  api_key: '562446921228167',    // ← your api key
  api_secret: 'JJcfs_Pngkr7aTk9LbUgG7L9VJ4' // ← your api secret
});

async function runOnboarding() {
  try {
    // Step 1: Upload a sample image from Cloudinary's demo domain
    console.log('📤 Uploading sample image...\n');
    
    // Small test PNG as base64
    const testImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVR42mNkYPhfAQMxwOgKGBgZGf4zMDAwMvxnYPhPIQAEGAECF4d2rwAAAABJRU5ErkJggg==';
    
    const uploadResponse = await cloudinary.uploader.upload(
      testImage,
      {
        folder: 'cloudinary-onboarding',
        resource_type: 'image'
      }
    );

    const publicId = uploadResponse.public_id;
    const secureUrl = uploadResponse.secure_url;

    console.log('✅ Upload successful!');
    console.log(`📍 Public ID: ${publicId}`);
    console.log(`🔗 Secure URL: ${secureUrl}\n`);

    // Step 2: Get image metadata
    console.log('📊 Fetching image metadata...\n');
    
    const resource = await cloudinary.api.resource(publicId);

    console.log('✅ Metadata retrieved:');
    console.log(`  Width:      ${resource.width} px`);
    console.log(`  Height:     ${resource.height} px`);
    console.log(`  Format:     ${resource.format}`);
    console.log(`  File size:  ${resource.bytes} bytes\n`);

    // Step 3: Generate transformed image URL
    console.log('🎨 Generating optimized image URL...\n');
    
    // f_auto: automatically selects the best format (WebP for modern browsers, JPEG/PNG for older)
    // q_auto: automatically selects the best quality to optimize file size while maintaining visual quality
    const transformedUrl = cloudinary.url(publicId, {
      transformation: [
        { fetch_format: 'auto' },  // f_auto: automatic format
        { quality: 'auto' }        // q_auto: automatic quality
      ]
    });

    console.log('✅ Transformation complete!');
    console.log(`Done! Click link below to see optimized version of the image. Check the size and the format.\n`);
    console.log(`🔗 Transformed URL: ${transformedUrl}\n`);

  } catch (error) {
    console.error('❌ Error during onboarding:', error.message);
    process.exit(1);
  }
}

// Run the onboarding flow
runOnboarding();
