'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "../../components/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/card"
import { Input } from "../../components/input"
import { Textarea } from "../../components/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/dialog"
import { ThumbsUp, ThumbsDown, MessageSquare, Link as LinkIcon } from 'lucide-react'

type Post = {
  id: number
  author: string
  avatar: string
  title: string
  content: string
  image?: string
  link?: string
  upvotes: number
  downvotes: number
  comments: Comment[]
}

type Comment = {
  id: number
  author: string
  avatar: string
  content: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Sustainable Farming Practices",
      content: "In this post, I'll share some sustainable farming practices that have worked well on my farm...",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com/sustainable-farming",
      upvotes: 15,
      downvotes: 2,
      comments: [
        { id: 1, author: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40", content: "Great tips! I've been looking for ways to make my farm more sustainable." },
        { id: 2, author: "Bob Johnson", avatar: "/placeholder.svg?height=40&width=40", content: "How do you deal with pest control in a sustainable way?" }
      ]
    },
    {
      id: 2,
      author: "Alice Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Crop Rotation Strategies",
      content: "Crop rotation is crucial for maintaining soil health. Here's how I plan my rotations...",
      upvotes: 8,
      downvotes: 1,
      comments: []
    }
  ])

  const [newPost, setNewPost] = useState({ title: '', content: '', image: '', link: '' })
  const [newComment, setNewComment] = useState('')

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const post: Post = {
      id: posts.length + 1,
      author: "Current User",
      avatar: "/placeholder.svg?height=40&width=40",
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      link: newPost.link,
      upvotes: 0,
      downvotes: 0,
      comments: []
    }
    setPosts([post, ...posts])
    setNewPost({ title: '', content: '', image: '', link: '' })
  }

  const handleCommentSubmit = (postId: number) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const newCommentObj: Comment = {
          id: post.comments.length + 1,
          author: "Current User",
          avatar: "/placeholder.svg?height=40&width=40",
          content: newComment
        }
        return { ...post, comments: [...post.comments, newCommentObj] }
      }
      return post
    })
    setPosts(updatedPosts)
    setNewComment('')
  }

  const handleVote = (postId: number, voteType: 'upvote' | 'downvote') => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        if (voteType === 'upvote') {
          return { ...post, upvotes: post.upvotes + 1 }
        } else {
          return { ...post, downvotes: post.downvotes + 1 }
        }
      }
      return post
    })
    setPosts(updatedPosts)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Farmers Blog</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-8">Create New Post</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Blog Post</DialogTitle>
            <DialogDescription>Share your farming knowledge and experiences with the community.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePostSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right">Title</label>
                <Input
                  id="title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="content" className="text-right">Content</label>
                <Textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="image" className="text-right">Image URL</label>
                <Input
                  id="image"
                  value={newPost.image}
                  onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="link" className="text-right">Link</label>
                <Input
                  id="link"
                  value={newPost.link}
                  onChange={(e) => setNewPost({ ...newPost, link: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Post</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="space-y-8">
        {posts.map(post => (
          <Card key={post.id} className="w-full">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {post.author}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.content}</p>
              {post.image && (
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={post.image}
                    alt="Post image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  {post.link}
                </a>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" onClick={() => handleVote(post.id, 'upvote')}>
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.upvotes}
                </Button>
                <Button variant="ghost" onClick={() => handleVote(post.id, 'downvote')}>
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  {post.downvotes}
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {post.comments.length} Comments
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Comments</DialogTitle>
                  </DialogHeader>
                  <div className="max-h-96 overflow-y-auto">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="flex items-start space-x-4 mb-4">
                        <Avatar>
                          <AvatarImage src={comment.avatar} alt={comment.author} />
                          <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{comment.author}</p>
                          <p>{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(post.id); }}>
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="mb-4"
                    />
                    <Button type="submit">Post Comment</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}