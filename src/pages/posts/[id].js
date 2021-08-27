import { getAllPostIds } from '../../lib/posts'

export async function getStaticPaths(){
    const paths = gtAllPostIds()
    return {
        params,
        fallback: false
    }
}
