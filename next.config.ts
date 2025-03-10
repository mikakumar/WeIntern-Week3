import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/signup",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
        ],
      },
     
    ];
  },
  

  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: false,
      },]
  },

};


export default nextConfig;
