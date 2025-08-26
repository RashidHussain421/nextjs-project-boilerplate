import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Basmati Rice",
      description: "Premium long-grain aromatic rice with distinctive fragrance and delicate flavor. Perfect for biryanis and pilaf dishes.",
      image: "https://placehold.co/400x300?text=Premium+basmati+rice+grains+in+elegant+display+bowl",
      features: ["Long Grain", "Aromatic", "Premium Quality"],
      origin: "India"
    },
    {
      id: 2,
      name: "Jasmine Rice",
      description: "Fragrant long-grain rice with a subtle floral aroma. Soft and slightly sticky texture when cooked.",
      image: "https://placehold.co/400x300?text=Fragrant+jasmine+rice+with+natural+white+color",
      features: ["Fragrant", "Soft Texture", "Long Grain"],
      origin: "Thailand"
    },
    {
      id: 3,
      name: "Brown Rice",
      description: "Nutritious whole grain rice with natural bran layer intact. Rich in fiber, vitamins, and minerals.",
      image: "https://placehold.co/400x300?text=Healthy+brown+rice+grains+showing+natural+texture",
      features: ["Whole Grain", "High Fiber", "Nutritious"],
      origin: "USA"
    },
    {
      id: 4,
      name: "Arborio Rice",
      description: "Short-grain Italian rice perfect for risotto. High starch content creates creamy texture when cooked.",
      image: "https://placehold.co/400x300?text=Creamy+arborio+rice+grains+for+perfect+risotto",
      features: ["Short Grain", "High Starch", "Creamy"],
      origin: "Italy"
    },
    {
      id: 5,
      name: "Wild Rice",
      description: "Dark, nutty-flavored grain with chewy texture. Rich in protein and antioxidants.",
      image: "https://placehold.co/400x300?text=Dark+wild+rice+grains+with+distinctive+appearance",
      features: ["Nutty Flavor", "High Protein", "Antioxidants"],
      origin: "Canada"
    },
    {
      id: 6,
      name: "Sushi Rice",
      description: "Short-grain Japanese rice with perfect stickiness for sushi and other Japanese dishes.",
      image: "https://placehold.co/400x300?text=Perfect+sushi+rice+grains+with+ideal+stickiness",
      features: ["Short Grain", "Sticky", "Premium"],
      origin: "Japan"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Rice Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive collection of premium rice varieties sourced from the finest 
            growing regions around the world. Each variety is carefully selected and processed 
            to meet the highest quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.description}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-700 text-white">
                    {product.origin}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every grain of rice goes through our rigorous quality control process to ensure 
              you receive only the finest products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sourcing</h3>
              <p className="text-gray-600">
                Direct partnerships with certified farmers and premium growing regions worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600">
                State-of-the-art facilities with advanced cleaning, sorting, and packaging technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">
                Comprehensive quality testing including moisture content, purity, and nutritional analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Custom Rice Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We offer custom packaging, blending, and processing services to meet your specific requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3">
              Discuss Your Needs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
