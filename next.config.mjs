/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_CDA: process.env.CONTENTFUL_CDA,
    CONTENTFUL_CPA: process.env.CONTENTFUL_CPA,
  },
};

export default nextConfig;
