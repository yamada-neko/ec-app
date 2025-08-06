import { Suspense } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CategoryGrid from "./components/CategoryGrid"
import FeaturedProducts from "./components/FeaturedProducts"
import PopularBrands from "./components/PopularBrands"
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          <CategoryGrid />
          <Suspense fallback={<div>Loading...</div>}>
            <FeaturedProducts />
          </Suspense>
          <PopularBrands />
        </div>
      </main>
      <Footer />
    </div>
  )
}
