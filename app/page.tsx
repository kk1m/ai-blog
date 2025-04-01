import Link from "next/link"
import { ArrowRight, Newspaper, Grid, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          AI Insights Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive resource for AI news, services, and personal experimentation.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-500 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Newspaper className="text-purple-600" />
            </div>
            <CardTitle>AI News</CardTitle>
            <CardDescription>Stay updated with the latest developments in AI</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Get the most recent updates on breakthroughs, research papers, and industry news in artificial
              intelligence.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="group">
              <Link href="/news">
                Explore News <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Grid className="text-blue-600" />
            </div>
            <CardTitle>AI Services Directory</CardTitle>
            <CardDescription>Discover and compare AI tools and services</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Browse our comprehensive directory of AI services, filter by category, and find the perfect tools for your
              needs.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="group">
              <Link href="/services">
                View Directory <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-green-500 group">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="text-green-600" />
            </div>
            <CardTitle>AI Experiments</CardTitle>
            <CardDescription>Personal learnings and experimentation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Follow along with hands-on experiments, tutorials, and insights from personal AI projects and learning
              journeys.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="group">
              <Link href="/blog">
                Read Blog <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full">
                  <Link href={article.link} className="flex items-center justify-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 py-16 px-4 rounded-2xl mb-8">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest AI news, tools, and insights directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md flex-grow focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  )
}

const featuredArticles = [
  {
    title: "GPT-5: What We Know So Far About OpenAI's Next Model",
    excerpt:
      "Rumors and official statements about the next iteration of OpenAI's large language model have been circulating. Here's what we know so far.",
    date: "April 1, 2025",
    category: "News",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/gpt-5-what-we-know",
  },
  {
    title: "Comparing 10 Leading AI Image Generators in 2025",
    excerpt:
      "A comprehensive comparison of the top AI image generation tools, their features, pricing, and output quality.",
    date: "March 28, 2025",
    category: "Services",
    image: "/placeholder.svg?height=200&width=400",
    link: "/services/ai-image-generators-comparison",
  },
  {
    title: "Building a Custom RAG System with LangChain and Pinecone",
    excerpt: "My journey creating a specialized retrieval-augmented generation system for technical documentation.",
    date: "March 25, 2025",
    category: "Experiments",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/custom-rag-system",
  },
  {
    title: "AI Regulation: EU's AI Act and Its Global Impact",
    excerpt:
      "An analysis of the European Union's comprehensive AI regulation and how it's shaping AI development worldwide.",
    date: "March 22, 2025",
    category: "News",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/eu-ai-act-impact",
  },
  {
    title: "Fine-tuning LLMs on Domain-Specific Data: A Step-by-Step Guide",
    excerpt: "My experience fine-tuning open-source language models on specialized datasets for improved performance.",
    date: "March 18, 2025",
    category: "Experiments",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/fine-tuning-llms",
  },
  {
    title: "The Rise of AI Agents: Autonomous Systems in 2025",
    excerpt:
      "How AI agents are evolving from simple chatbots to complex autonomous systems that can perform tasks with minimal human intervention.",
    date: "March 15, 2025",
    category: "News",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/rise-of-ai-agents",
  },
]

