import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          AI Experiments & Learnings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Follow my journey exploring AI technologies through hands-on experiments and projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <Card className="h-full overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Building a Custom RAG System"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-4 left-4">Tutorial</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                March 25, 2025
                <span className="mx-2">•</span>
                <User className="mr-2 h-4 w-4" />
                By Alex Chen
              </div>
              <CardTitle className="text-2xl">Building a Custom RAG System with LangChain and Pinecone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In this comprehensive tutorial, I walk through my process of creating a specialized retrieval-augmented
                generation system for technical documentation. Learn how to combine vector search with LLMs to create
                more accurate and contextually relevant AI responses.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
              >
                <Link href="/blog/custom-rag-system">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                March 18, 2025
              </div>
              <CardTitle>Fine-tuning LLMs on Domain-Specific Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                My experience fine-tuning open-source language models on specialized datasets for improved performance
                in niche domains.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="group w-full justify-start">
                <Link href="/blog/fine-tuning-llms">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                March 10, 2025
              </div>
              <CardTitle>Implementing Multimodal AI in a Production Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Lessons learned from deploying a multimodal AI system that processes text, images, and audio in a
                high-traffic web application.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="group w-full justify-start">
                <Link href="/blog/multimodal-ai-production">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-2 left-2">{post.category}</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="group w-full justify-start">
                <Link href={post.link}>
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="border-primary/20 hover:bg-primary/5 transition-all duration-300">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "Comparing Embeddings: BERT vs. Ada vs. Custom Models",
    excerpt:
      "An in-depth comparison of different embedding models for semantic search applications, with benchmarks and practical recommendations.",
    date: "March 5, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/comparing-embeddings",
  },
  {
    title: "Building an AI-Powered Content Recommendation Engine",
    excerpt:
      "How I built a personalized content recommendation system using collaborative filtering and neural networks.",
    date: "February 28, 2025",
    category: "Tutorial",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/ai-recommendation-engine",
  },
  {
    title: "Optimizing Prompt Engineering for Specific Domains",
    excerpt:
      "Strategies and techniques for crafting effective prompts that yield better results for domain-specific applications.",
    date: "February 20, 2025",
    category: "Guide",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/prompt-engineering-domains",
  },
  {
    title: "Implementing Semantic Kernel for AI Orchestration",
    excerpt:
      "A hands-on guide to using Microsoft's Semantic Kernel framework to orchestrate multiple AI models in a unified application.",
    date: "February 15, 2025",
    category: "Tutorial",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/semantic-kernel-guide",
  },
  {
    title: "AI Model Evaluation: Beyond Accuracy Metrics",
    excerpt:
      "Why traditional accuracy metrics aren't enough for evaluating modern AI models, and what alternatives you should consider.",
    date: "February 10, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/ai-evaluation-metrics",
  },
  {
    title: "Creating a Voice Assistant with Whisper and ElevenLabs",
    excerpt:
      "Step-by-step tutorial on building a custom voice assistant using OpenAI's Whisper for speech recognition and ElevenLabs for voice synthesis.",
    date: "February 5, 2025",
    category: "Tutorial",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/voice-assistant-tutorial",
  },
]

