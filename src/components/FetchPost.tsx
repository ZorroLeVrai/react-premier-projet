import { useEffect, useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FetchPost = () => {
    const [postId, setPostId] = useState<number>(1);
    const [post, setPost] = useState<Post | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostId(event.target.valueAsNumber);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data); // Handle the fetched data
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, [postId]);

  return (
    <>
        <div>FetchPost</div>
        <label htmlFor="postId">Enter Post ID:</label>
        <input type="number" min="1" max="100" defaultValue="1" id="postId" onChange={handleChange} />
        <div>
            {post ? (
                <div>
                    <h2>Post {post.id}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </>
  )
}

export default FetchPost;