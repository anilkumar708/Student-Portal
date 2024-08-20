import styled from "@emotion/styled";
import { Label } from "@mui/icons-material";
import { FormControl } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
const BlogPost = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchPost();
  }, []);

  const createPost = (e) => {
    e.preventDefault();
    // sessionStorage.setItem("test", JSON.stringify(post));
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => {
        setPost([...post, res.data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChnageInput = (e) => {
    const { name, value } = e.target;
    setNewPost((newPost) => ({ ...newPost, [name]: value }));
  };
  console.log(newPost);

  const fetchPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((blogs) => {
      console.log(blogs, "blogs");
      setPost(blogs.data);
    });
    // const data = sessionStorage.getItem("test");
    // const parsedData = data ? JSON.stringify(data) : {}; // Provide a fallback empty object
    // setPost(parsedData);
  };

  console.log(post, "post");

  return (
    <Main>
      <Title>Learning BlogPost With API</Title>
      <form onSubmit={createPost}>
        <label>
          Title:
          <input
            type="text"
            name={"title"}
            placeholder="Title"
            value={newPost.title}
            onChange={onChnageInput}
          />
        </label>
        <br />
        <label>
          Body:
          <input
            type="text"
            name={"body"}
            placeholder="Body"
            value={newPost.body}
            onChange={onChnageInput}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
      {post.map((blog) => (
        <li key={blog.id}>
          {blog.title}
          {/* {blog.body} */}
        </li>
      ))}
    </Main>
  );
};

const Main = styled.section``;
const Title = styled.h1``;

export default BlogPost;
