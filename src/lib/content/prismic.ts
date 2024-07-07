import * as prismic from '@prismicio/client'

const repositoryName = "jonasebert"

const routes = [
    {
        type: 'article',
        path: '/blog/:uid',
    },
]

const createClient = (fetch: prismic.FetchLike) => {
    const clientOptions = {
        fetch,
        routes
    }
    const client = prismic.createClient(repositoryName, clientOptions)
    return client
}

export default createClient