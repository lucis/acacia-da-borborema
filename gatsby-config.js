module.exports = {
  siteMetadata: {
    title: `Início`,
    titleTemplate: '%s | Loja Maçônica "Acácia da Borborema" nº 41',
    url: `https://www.acaciadaborborema.com.br`,
    description: `Loja Maçônica "Acácia da Borborema" da cidade de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba`,
    image: '/images/acacia.jpg',
  },
  plugins: [
    {
      resolve: '@luciannojunior/gatsby-theme-lodge',
      options: {
        basePath: '/',
      },
    },
  ],
}
