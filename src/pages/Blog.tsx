import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";

const Blog = () => {
  const scrollToNewsletter = () => {
    const element = document.querySelector('#newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredPosts = [
    {
      id: 1,
      title: "Modern Enterprise Architecture Patterns",
      excerpt: "Exploring scalable architecture designs for large organizations.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Architecture"
    },
    {
      id: 2,
      title: "Digital Transformation Roadmap",
      excerpt: "Step-by-step guide to modernizing legacy systems.",
      date: "June 2, 2023",
      readTime: "8 min read",
      category: "Transformation"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Building Secure Enterprise Systems",
      excerpt: "Best practices for implementing security at scale.",
      date: "July 18, 2023",
      readTime: "6 min read",
      category: "Security"
    },
    {
      id: 4,
      title: "Team Collaboration in Distributed Environments",
      excerpt: "Tools and techniques for remote team productivity.",
      date: "August 1, 2023",
      readTime: "4 min read",
      category: "Collaboration"
    },
    {
      id: 5,
      title: "Cloud Migration Strategies",
      excerpt: "Comparing lift-and-shift vs cloud-native approaches.",
      date: "August 3, 2023",
      readTime: "7 min read",
      category: "Cloud"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Enterprise</span>
                <br />
                <span className="text-muted-foreground">Insights & Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Expert articles, guides, and best practices for enterprise technology leaders.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToNewsletter}
              >
                Subscribe to Newsletter
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-card transition-all duration-300 border-border/50">
                  <CardHeader>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                      {post.category}
                    </span>
                    <CardTitle className="text-2xl text-card-foreground">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center mr-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Recent Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {recentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-card transition-all duration-300 border-border/50">
                  <CardHeader>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                      {post.category}
                    </span>
                    <CardTitle className="text-xl text-card-foreground">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-primary text-primary">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 h-12 mx-auto text-primary mb-6" />
              <h2 className="text-4xl font-bold mb-8 text-foreground">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest enterprise technology insights.
              </p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your work email" 
                  className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button 
                  className="bg-gradient-primary rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;