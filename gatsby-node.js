const path = require('path')
const fs = require('fs')

const createStaticPages = async (actions, graphql, reporter) => {
  const result = await graphql(`
    query PagesQuery {
      allPage {
        nodes {
          name
          title
          homepage
          component
          path
          props
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('No can do!')
  }

  const { nodes: pages } = result.data.allPage

  const getComponentImplementation = (name) => {
    const COMPONENTS_PATH = './src/components/'
    const ENDINGS = ['.js', '.jsx', '/index.js', '/index.jsx']
    for (const ending of ENDINGS) {
      const filePath = COMPONENTS_PATH + name + ending
      if (fs.existsSync(filePath)) return path.resolve(filePath)
      try {
        return require.resolve(COMPONENTS_PATH + name + ending)
      } catch (e) {
        continue
      }
    }
    throw new Error(`couldn't find ${name}'s implementation`)
  }

  pages.forEach(({ path, component, title, props = '{}' }) => {
    const componentProps = JSON.parse(props)
    actions.createPage({
      path,
      component: getComponentImplementation(component),
      context: {
        title,
        componentProps,
      },
    })
  })
}

const createNoticiasPages = async (actions, graphql, reporter) => {
  const result = await graphql(`
    query NoticiasQuery {
      allPrismicNoticia(sort: { fields: first_publication_date, order: DESC }) {
        nodes {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('No can do!')
  }

  const { nodes: pages } = result.data.allPrismicNoticia
  const template = require.resolve('./src/templates/Noticia.jsx')
  pages.forEach(
    ({
      uid,
      data: {
        title: { text: title },
      },
    }) => {
      actions.createPage({
        path: `/${uid}`,
        component: template,
        context: {
          uid,
          title,
        },
      })
    }
  )
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createStaticPages(actions, graphql, reporter)
  await createNoticiasPages(actions, graphql, reporter)
}
