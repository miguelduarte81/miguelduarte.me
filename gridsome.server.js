// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {

    const { data } = await graphql(`
      {
        Prismic{
          allProjects {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)

    data.Prismic.allProjects.edges.forEach((project) => {
      createPage({
        path: `/project/${project.node._meta.uid}`,
        component: './src/templates/Project.vue',
        context: {
          uid: project.node._meta.uid
        }
      })
    });
  })
}