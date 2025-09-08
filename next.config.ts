const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    PRISMA_DISABLE_WARNINGS: "true"
  }
};

export default nextConfig;
