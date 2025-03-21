"use client"

import { useState, useEffect } from "react"
import { NewsCard } from "./news-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Filter } from "lucide-react"
import { API_KEYS, API_ENDPOINTS, NEWS_CATEGORIES } from "@/lib/api-config"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
}

export function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("technology")
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    try {
      setLoading(true)
      setError(null)
      const query = searchQuery || selectedCategory
      const today = new Date().toISOString().split('T')[0]
      
      const response = await fetch(
        `${API_ENDPOINTS.NEWS}?q=${query}&from=${today}&sortBy=publishedAt&apiKey=${API_KEYS.NEWS_API}`
        // Removed headers to avoid preflight request
      )
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.statusText}`)
      }
      
      const data = await response.json()
      
      if (data.status === 'error') {
        throw new Error(data.message || 'Failed to fetch news')
      }
      
      setArticles(data.articles || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching news. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [selectedCategory])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchNews()
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive">{error}</p>
        <Button onClick={fetchNews} className="mt-4">
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {NEWS_CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {NEWS_CATEGORIES.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        ))}
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={article.url} {...article} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}