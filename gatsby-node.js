const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
  // Hace la solicitud a la API para leer la información
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
})

// Utiliza el método createPages para crear las páginas con la data que recibe
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  // Hace una solicitud de los strapiId de cada articulo para generar la URL y directorio
  const getArticles = makeRequest(
  graphql,
  `
  {
  allStrapiButterfly {
    edges {
      node {
        strapiId
      }
    }
  }
}
`
).then(result => {
  // Crea la página para cada articulo
  result.data.allStrapiButterfly.edges.forEach(({ node }) => {
    createPage({
    path: `/${node.strapiId}`,
    // Le indica que template utilizar en esta página
    component: path.resolve(`src/templates/butterfly.js`),
    context: {
      id: node.strapiId,
    },
  })
  })
})
  // Devuelve todos los artículos
  return getArticles
}
