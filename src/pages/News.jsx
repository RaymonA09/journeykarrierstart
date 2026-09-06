import { useState, useEffect } from "react";
import { Article } from "@/entities/Article";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Search, 
  Filter,
  ArrowRight,
  Newspaper,
  Clock,
  Tag
} from "lucide-react";
import { format } from "date-fns";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [articles, searchTerm, categoryFilter]);

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const data = await Article.list("-created_date");
      const publishedArticles = data.filter(article => article.published);
      setArticles(publishedArticles);
    } catch (error) {
      console.error("Error loading articles:", error);
    }
    setIsLoading(false);
  };

  const filterArticles = () => {
    let filtered = articles;

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(article => article.category === categoryFilter);
    }

    setFilteredArticles(filtered);
  };

  const categoryColors = {
    news: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    updates: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    guides: "bg-stone-100 text-stone-700 border-stone-200",
    success_stories: "bg-[#8B9556]/20 text-[#556B2F] border-[#8B9556]/30",
    immigration_tips: "bg-stone-100 text-stone-700 border-stone-200"
  };

  const categoryLabels = {
    news: "News",
    updates: "Updates",
    guides: "Guides",
    success_stories: "Success Stories",
    immigration_tips: "Immigration Tips"
  };

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay informed with the latest news, immigration updates, success stories, and helpful guides for your German journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Latest immigration news
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Success stories
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Expert guides
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="updates">Updates</SelectItem>
                  <SelectItem value="guides">Guides</SelectItem>
                  <SelectItem value="success_stories">Success Stories</SelectItem>
                  <SelectItem value="immigration_tips">Immigration Tips</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="w-4 h-4" />
                <span>{filteredArticles.length} articles found</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Article */}
        {!isLoading && filteredArticles.length > 0 && (
          <Card className="mb-12 border-2 border-[#1C3E1F]/20 bg-[#1C3E1F]/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className={`${categoryColors[filteredArticles[0].category]} border mb-4`}>
                    <Newspaper className="w-3 h-3 mr-1" />
                    {categoryLabels[filteredArticles[0].category]}
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt || truncateContent(filteredArticles[0].content, 200)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(filteredArticles[0].created_date), "MMM d, yyyy")}</span>
                    </div>
                    {filteredArticles[0].tags && filteredArticles[0].tags.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{filteredArticles[0].tags.slice(0, 2).join(", ")}</span>
                      </div>
                    )}
                  </div>
                  <Button className="bg-[#1C3E1F] hover:bg-[#2d5a32]">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div>
                  {filteredArticles[0].featured_image ? (
                    <img 
                      src={filteredArticles[0].featured_image}
                      alt={filteredArticles[0].title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-64 bg-stone-100 rounded-xl flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-[#1C3E1F]" />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))
          ) : filteredArticles.length === 0 ? (
            <div className="lg:col-span-3 text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or check back later for new articles.
              </p>
            </div>
          ) : (
            filteredArticles.slice(1).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  {article.featured_image ? (
                    <img 
                      src={article.featured_image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <Newspaper className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  
                  <Badge className={`${categoryColors[article.category]} border mb-3 w-fit`}>
                    {categoryLabels[article.category]}
                  </Badge>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(article.created_date), "MMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt || truncateContent(article.content)}
                  </p>
                  
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <Button size="sm" className="w-full border border-gray-300 text-gray-900 hover:bg-gray-100">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest immigration news, success stories, and helpful guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              type="email"
              className="flex-1"
            />
            <Button className="bg-[#1C3E1F] hover:bg-[#2d5a32]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}