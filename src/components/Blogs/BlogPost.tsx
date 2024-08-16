import styled from "@emotion/styled";
import { Label } from "@mui/icons-material";
import { FormControl } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
const BlogPost = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({ title: "", body: "" });

  const createPost = (e) => {
    e.preventDefault();
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

  return (
    <Main>
      <Title>Learning BlogPost With API</Title>
      <form onSubmit={createPost}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Body:
          <input
            type="text"
            placeholder="Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
      {post.map((blog) => (
        <li key={blog.id}>
          {blog.title}
          {blog.body}
        </li>
      ))}
    </Main>
  );
};

const Main = styled.section``;
const Title = styled.h1``;

export default BlogPost;
