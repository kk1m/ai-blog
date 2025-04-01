import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          AI News
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest developments in artificial intelligence
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="industry">Industry</TabsTrigger>
            <TabsTrigger value="policy">Policy & Ethics</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <FeaturedArticle article={featuredArticles[0]} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {allArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="research">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles
              .filter((article) => article.category === "Research")
              .map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="industry">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles
              .filter((article) => article.category === "Industry")
              .map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="policy">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles
              .filter((article) => article.category === "Policy & Ethics")
              .map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Articles</Button>
      </div>
    </div>
  )
}

function FeaturedArticle({ article }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg p-8 shadow-sm border">
      <div className="aspect-video relative overflow-hidden rounded-lg shadow-md group">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Badge className="w-fit mb-4">{article.category}</Badge>
        <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="mr-2 h-4 w-4" />
          {article.date}
        </div>
        <p className="mb-6">{article.excerpt}</p>
        <Button
          asChild
          className="w-fit bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
        >
          <Link href={article.link}>
            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function ArticleCard({ article }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2">{article.category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          {article.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="group w-full justify-start">
          <Link href={article.link}>
            Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const featuredArticles = [
  {
    title: "GPT-5: What We Know So Far About OpenAI's Next Model",
    excerpt:
      "OpenAI is reportedly working on GPT-5, the successor to its groundbreaking GPT-4 model. Sources suggest significant improvements in reasoning capabilities, multimodal understanding, and reduced hallucinations. This article explores the rumors, official statements, and potential impact of this upcoming model.",
    date: "April 1, 2025",
    category: "Research",
    image: "/placeholder.svg?height=400&width=800",
    link: "/news/gpt-5-what-we-know",
  },
]

const allArticles = [
  {
    title: "AI Regulation: EU's AI Act and Its Global Impact",
    excerpt:
      "The European Union has finalized its comprehensive AI regulation framework, setting global standards for AI development and deployment.",
    date: "March 22, 2025",
    category: "Policy & Ethics",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/eu-ai-act-impact",
  },
  {
    title: "The Rise of AI Agents: Autonomous Systems in 2025",
    excerpt:
      "How AI agents are evolving from simple chatbots to complex autonomous systems that can perform tasks with minimal human intervention.",
    date: "March 15, 2025",
    category: "Industry",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/rise-of-ai-agents",
  },
  {
    title: "Breakthrough in Multimodal Learning: New Research from Stanford",
    excerpt:
      "Stanford researchers have developed a new approach to multimodal learning that significantly improves cross-modal understanding.",
    date: "March 10, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/stanford-multimodal-breakthrough",
  },
  {
    title: "Google DeepMind Announces New Quantum Machine Learning Models",
    excerpt:
      "Google DeepMind has unveiled a new set of quantum machine learning models that promise to revolutionize computational chemistry.",
    date: "March 5, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/deepmind-quantum-ml",
  },
  {
    title: "AI Startups Raised $50 Billion in Q1 2025",
    excerpt:
      "Investment in AI startups continues to surge, with a record $50 billion raised in the first quarter of 2025 alone.",
    date: "March 1, 2025",
    category: "Industry",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/ai-startup-funding-q1-2025",
  },
  {
    title: "UN Establishes Global AI Ethics Committee",
    excerpt:
      "The United Nations has established a global committee to develop ethical guidelines for AI development and deployment.",
    date: "February 25, 2025",
    category: "Policy & Ethics",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/un-ai-ethics-committee",
  },
  {
    title: "Meta's New AI Model Achieves Human-Level Performance in Visual Reasoning",
    excerpt:
      "Meta's latest AI model has achieved human-level performance in visual reasoning tasks, a significant milestone in computer vision.",
    date: "February 20, 2025",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/meta-visual-reasoning",
  },
  {
    title: "AI-Generated Content Now Makes Up 30% of the Internet",
    excerpt:
      "A new study reveals that AI-generated content now accounts for approximately 30% of all content on the internet.",
    date: "February 15, 2025",
    category: "Industry",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/ai-content-internet-study",
  },
  {
    title: "China Unveils National AI Strategy for 2025-2030",
    excerpt:
      "China has released its national AI strategy for the next five years, focusing on semiconductor independence and foundation models.",
    date: "February 10, 2025",
    category: "Policy & Ethics",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/china-ai-strategy-2025",
  },
]

