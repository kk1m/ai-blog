"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Search, Filter } from "lucide-react"

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [pricingFilter, setPricingFilter] = useState("all")

  const filteredServices = aiServices.filter((service) => {
    // Search filter
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = categoryFilter === "all" || service.category === categoryFilter

    // Pricing filter
    const matchesPricing = pricingFilter === "all" || service.pricingModel === pricingFilter

    return matchesSearch && matchesCategory && matchesPricing
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          AI Services Directory
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover and compare the latest AI tools and services across different categories
        </p>
      </div>

      <div className="mb-8 bg-card border rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 space-y-2">
            <label htmlFor="search" className="text-sm font-medium">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                type="search"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="w-full md:w-48 space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter} id="category">
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="text-generation">Text Generation</SelectItem>
                <SelectItem value="image-generation">Image Generation</SelectItem>
                <SelectItem value="audio-generation">Audio Generation</SelectItem>
                <SelectItem value="video-generation">Video Generation</SelectItem>
                <SelectItem value="code-generation">Code Generation</SelectItem>
                <SelectItem value="data-analysis">Data Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-48 space-y-2">
            <label htmlFor="pricing" className="text-sm font-medium">
              Pricing
            </label>
            <Select value={pricingFilter} onValueChange={setPricingFilter} id="pricing">
              <SelectTrigger>
                <SelectValue placeholder="Select pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing Models</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="freemium">Freemium</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
                <SelectItem value="pay-as-you-go">Pay-as-you-go</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => {
              setSearchQuery("")
              setCategoryFilter("all")
              setPricingFilter("all")
            }}
          >
            <Filter className="mr-2 h-4 w-4" />
            Reset Filters
          </Button>
        </div>
      </div>

      <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Service</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[150px]">Category</TableHead>
                <TableHead className="w-[120px]">Pricing</TableHead>
                <TableHead className="w-[80px] text-center">Rating</TableHead>
                <TableHead className="w-[100px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <TableRow key={index} className="group hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.tagline}</div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-md">
                      <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(service.category)} className="whitespace-nowrap">
                        {service.category
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{service.pricingModel}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        {service.rating}
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Visit <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    <div className="py-8">
                      <h3 className="text-lg font-medium mb-2">No services found</h3>
                      <p className="text-muted-foreground">Try adjusting your filters or search query</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

function getBadgeVariant(category: string) {
  switch (category) {
    case "text-generation":
      return "default"
    case "image-generation":
      return "secondary"
    case "audio-generation":
      return "destructive"
    case "video-generation":
      return "outline"
    case "code-generation":
      return "default"
    case "data-analysis":
      return "secondary"
    default:
      return "default"
  }
}

const aiServices = [
  {
    name: "OpenAI GPT-4o",
    tagline: "Advanced language model for text generation",
    description:
      "The latest multimodal model from OpenAI, capable of understanding and generating text, images, and audio with high accuracy.",
    category: "text-generation",
    pricingModel: "pay-as-you-go",
    rating: 4.9,
    url: "https://openai.com",
  },
  {
    name: "Anthropic Claude 3",
    tagline: "Helpful, harmless, and honest AI assistant",
    description:
      "A family of AI assistants that can understand complex instructions and generate thoughtful, nuanced responses.",
    category: "text-generation",
    pricingModel: "subscription",
    rating: 4.8,
    url: "https://anthropic.com",
  },
  {
    name: "Midjourney",
    tagline: "Create stunning images with simple text prompts",
    description: "An AI image generation tool that creates detailed and artistic images based on text descriptions.",
    category: "image-generation",
    pricingModel: "subscription",
    rating: 4.7,
    url: "https://midjourney.com",
  },
  {
    name: "DALL-E 3",
    tagline: "Transform text into photorealistic images",
    description:
      "OpenAI's image generation model that creates highly detailed and accurate images from text descriptions.",
    category: "image-generation",
    pricingModel: "pay-as-you-go",
    rating: 4.6,
    url: "https://openai.com/dall-e-3",
  },
  {
    name: "Runway Gen-3",
    tagline: "AI-powered video generation and editing",
    description:
      "Create, edit, and transform videos using AI with features like text-to-video, image-to-video, and video editing.",
    category: "video-generation",
    pricingModel: "subscription",
    rating: 4.5,
    url: "https://runway.ml",
  },
  {
    name: "ElevenLabs",
    tagline: "Lifelike AI voices and audio generation",
    description:
      "Generate natural-sounding speech in multiple languages and voices with control over tone and emotion.",
    category: "audio-generation",
    pricingModel: "freemium",
    rating: 4.7,
    url: "https://elevenlabs.io",
  },
  {
    name: "GitHub Copilot",
    tagline: "Your AI pair programmer",
    description: "AI-powered code completion tool that helps developers write code faster and with fewer errors.",
    category: "code-generation",
    pricingModel: "subscription",
    rating: 4.8,
    url: "https://github.com/features/copilot",
  },
  {
    name: "Hugging Face",
    tagline: "The AI community building the future",
    description:
      "A platform that provides access to thousands of pre-trained models for various AI tasks, including NLP, computer vision, and more.",
    category: "text-generation",
    pricingModel: "freemium",
    rating: 4.6,
    url: "https://huggingface.co",
  },
  {
    name: "Stability AI",
    tagline: "Open foundation models for image and video",
    description:
      "Creators of Stable Diffusion and other open-source AI models for generating and editing visual content.",
    category: "image-generation",
    pricingModel: "freemium",
    rating: 4.5,
    url: "https://stability.ai",
  },
  {
    name: "Deepgram",
    tagline: "Speech-to-text API for developers",
    description:
      "AI-powered speech recognition platform that converts audio to text with high accuracy and low latency.",
    category: "audio-generation",
    pricingModel: "pay-as-you-go",
    rating: 4.4,
    url: "https://deepgram.com",
  },
  {
    name: "Synthesia",
    tagline: "AI video creation platform",
    description: "Create professional videos with AI avatars speaking your script in over 120 languages.",
    category: "video-generation",
    pricingModel: "subscription",
    rating: 4.3,
    url: "https://synthesia.io",
  },
  {
    name: "Databricks",
    tagline: "Unified analytics platform",
    description: "A data analytics and AI platform that helps organizations process and analyze large datasets.",
    category: "data-analysis",
    pricingModel: "subscription",
    rating: 4.7,
    url: "https://databricks.com",
  },
  {
    name: "Cohere",
    tagline: "Enterprise-grade language models",
    description:
      "Provides language models optimized for business applications with enhanced security and customization options.",
    category: "text-generation",
    pricingModel: "subscription",
    rating: 4.5,
    url: "https://cohere.ai",
  },
  {
    name: "Replicate",
    tagline: "Run machine learning models in the cloud",
    description:
      "Platform for running open-source machine learning models with a simple API, including Stable Diffusion and more.",
    category: "image-generation",
    pricingModel: "pay-as-you-go",
    rating: 4.4,
    url: "https://replicate.com",
  },
  {
    name: "Vercel AI SDK",
    tagline: "Build AI-powered applications",
    description:
      "A toolkit for building AI-powered applications with React, Next.js, and other frameworks, with streaming responses and more.",
    category: "code-generation",
    pricingModel: "free",
    rating: 4.7,
    url: "https://sdk.vercel.ai",
  },
]

