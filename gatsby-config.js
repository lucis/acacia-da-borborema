module.exports = {
  siteMetadata: {
    title: `Início`,
    titleTemplate: `Loja Maçônica Acácia da Borborema | %s`,
    url: `https://www.acaciadaborborema.com.br`,
    description: `Oriente de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba`,
    image: '/images/acacia_fb.png',
    siteUrl: "https://www.acaciadaborborema.com.br"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    '@lucis/gatsby-transformer-pages-json',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data',
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'acacia-da-borborema' ,
        accessToken: process.env.PRISMIC_ACACIA,
        linkResolver: () => post => `/${post.uid}`,
        schemas: {
          noticia: require('./src/schemas/noticia.json')
        }
      },
    }
  ],
}
