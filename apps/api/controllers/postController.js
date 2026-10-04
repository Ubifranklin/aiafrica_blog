import { posts } from "../data/posts.js";

const DEFAULT_IMAGE = "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg";

// GET /api/posts  (optional filter: /api/posts?category=Business)
export const getAllPosts = (req, res) => {
  const { category } = req.query;

  if (category && category !== "All categories") {
    const filtered = posts.filter((post) => post.category === category);
    return res.status(200).json(filtered);
  }

  res.status(200).json(posts);
};

// GET /api/posts/:id
export const getPostById = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(post);
};

// POST /api/posts
export const createPost = (req, res) => {
  const { title, category, content, author, image } = req.body;

  if (!title || !category || !content || !author) {
    return res.status(400).json({ error: "title, category, content and author are required" });
  }

  const newPost = {
    id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
    title: title.trim(),
    category,
    content: content.trim(),
    author,
    image: image || DEFAULT_IMAGE,
    date: new Date().toISOString().slice(0, 10),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

// PUT /api/posts/:id
export const updatePost = (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, category, content, image } = req.body;
  posts[index] = {
    ...posts[index],
    ...(title && { title }),
    ...(category && { category }),
    ...(content && { content }),
    ...(image && { image }),
  };

  res.status(200).json(posts[index]);
};

// DELETE /api/posts/:id
export const deletePost = (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(index, 1);
  res.status(204).send();
};