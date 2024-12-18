/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'harmony-homes.s3.eu-north-1.amazonaws.com'
        },
        {
            protocol: 'https',
            hostname: 'harmony-homes.s3.amazonaws.com'
        }
    ]
  }  
};

export default nextConfig;
