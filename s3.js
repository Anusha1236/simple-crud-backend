const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "your accesskeyid",
    secretAccessKey: "yoursecretkeyid"
  }
});

async function getObjectUrl(key) {
  const command = new GetObjectCommand({
    Bucket: "nodediv",  
    Key: key            
  });

  const url = await getSignedUrl(s3Client, command);
  console.log(url,'url');
  return url;
}

const key = "/uploads/my-uploads/image-1752820949098.jpeg"; 
getObjectUrl(key)
  .then(url => console.log("Presigned URL"))
  .catch(err => console.error("Error generating URL:", err));

async function putObjectUrl(filename,contentType){
    const command = new PutObjectCommand({
        Bucket:'nodediv',
        Key: `/uploads/my-uploads/${filename}`,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client,command);
    console.log(url,'upload');
    return url;
}
putObjectUrl(`image-${Date.now()}.jpeg`,'image/jpeg');
