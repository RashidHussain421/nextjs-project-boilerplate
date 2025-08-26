import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Quality Rice 
                <span className="text-green-700"> Worldwide</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Leading rice export company providing premium quality rice varieties to global markets. 
                Trusted supplier with years of experience in international rice trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3">
                    View Our Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Vibrant+rice+fields+in+lush+green+landscape+during+harvest+time"
                alt="Vibrant rice fields in lush green landscape during harvest time"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Rice Export Ltd?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering the finest quality rice with exceptional service and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-700 rounded-full"></div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Carefully selected and processed rice varieties that meet international quality standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-700 rounded-full"></div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serving customers worldwide with reliable shipping and logistics solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-700 rounded-full"></div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Years of experience and thousands of satisfied customers across the globe.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Rice Import Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable supply of premium quality rice.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
