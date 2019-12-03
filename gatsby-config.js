module.exports = {
  siteMetadata: {
    title: `Início`,
    titleTemplate: `Loja Maçônica "Acácia da Borborema" nº 41 | %s`,
    url: `https://www.acaciadaborborema.com.br`,
    description: `Loja Maçônica da cidade de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba`,
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
