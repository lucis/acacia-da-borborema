module.exports = {
  siteMetadata: {
    title: `Início`,
    titleTemplate: `Loja Maçônica Acácia da Borborema | %s`,
    url: `https://www.acaciadaborborema.com.br`,
    description: `Oriente de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba`,
    image: '/images/acacia_fb.png',
  },
  plugins: [
    {
      resolve: '@luciannojunior/gatsby-theme-lodge',
      options: {
        basePath: '/',
        prismic: {
          key: process.env.PRISMIC_ACACIA,
          repo: 'acacia-da-borborema'
        }
      },
    },
  ],
}
