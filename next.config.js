/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rest-hunt-static.s3.ap-south-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
