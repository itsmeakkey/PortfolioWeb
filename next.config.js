const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes por defecto
  },
  assetPrefix: isProd ? '/PortfolioWeb' : '',
  basePath: isProd ? '/PortfolioWeb' : '',
  output: 'export',
};
