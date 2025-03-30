import { use } from "react"
import Post from "./Post";

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise);

    return (
        <div className="card">
            <h2>All Posts are here</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}