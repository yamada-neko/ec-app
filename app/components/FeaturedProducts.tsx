import Image from "next/image"
import Link from "next/link"
import { Star, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "ワイヤレスイヤホン Pro",
    price: 15800,
    originalPrice: 19800,
    rating: 4.5,
    reviews: 1234,
    image: "/placeholder.svg?height=300&width=300&text=イヤホン",
    badge: "ベストセラー",
    freeShipping: true
  },
  {
    id: 2,
    name: "スマートウォッチ Series 5",
    price: 32800,
    originalPrice: 39800,
    rating: 4.7,
    reviews: 856,
    image: "/placeholder.svg?height=300&width=300&text=スマートウォッチ",
    badge: "新商品",
    freeShipping: true
  },
  {
    id: 3,
    name: "ノートパソコン 14インチ",
    price: 89800,
    originalPrice: 109800,
    rating: 4.3,
    reviews: 432,
    image: "/placeholder.svg?height=300&width=300&text=ノートPC",
    badge: "限定セール",
    freeShipping: true
  },
  {
    id: 4,
    name: "デザイナーズチェア",
    price: 24800,
    originalPrice: 34800,
    rating: 4.6,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=300&text=チェア",
    badge: "人気",
    freeShipping: false
  },
  {
    id: 5,
    name: "コーヒーメーカー",
    price: 12800,
    originalPrice: 16800,
    rating: 4.4,
    reviews: 789,
    image: "/placeholder.svg?height=300&width=300&text=コーヒーメーカー",
    badge: "おすすめ",
    freeShipping: true
  },
  {
    id: 6,
    name: "フィットネストラッカー",
    price: 8800,
    originalPrice: 12800,
    rating: 4.2,
    reviews: 543,
    image: "/placeholder.svg?height=300&width=300&text=フィットネス",
    badge: "セール",
    freeShipping: true
  }
]

export default function FeaturedProducts() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">おすすめ商品</h2>
        <Link href="/products" className="text-red-600 hover:text-red-700 font-medium">
          すべて見る →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow group">
            <div className="relative">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2"
              >
                <Heart className="h-4 w-4" />
              </Button>
              {product.badge && (
                <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-red-600">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">
                  ({product.reviews})
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-bold text-red-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ¥{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              
              {product.freeShipping && (
                <p className="text-xs text-green-600 mb-2">送料無料</p>
              )}
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                カートに追加
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
