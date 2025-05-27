import React, { useEffect, useState } from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FetchDemo = () => {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
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
    }, []);

    return (
        <>
            <div>Post:</div>
            <div>{JSON.stringify(post, null, 2)}</div>
        </>
    )
}

export default FetchDemo;