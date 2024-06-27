/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com','flowbite.s3.amazonaws.com']

      },
      eslint:{
        ignoreDuringBuilds:true,
      },

};

export default nextConfig;
