import Image from "next/image"
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

// Mock product data
const product = {
  id: 1,
  name: "ワイヤレスイヤホン Pro - ノイズキャンセリング機能付き",
  price: 15800,
  originalPrice: 19800,
  rating: 4.5,
  reviews: 1234,
  images: [
    "/placeholder.svg?height=500&width=500&text=イヤホン1",
    "/placeholder.svg?height=500&width=500&text=イヤホン2",
    "/placeholder.svg?height=500&width=500&text=イヤホン3",
    "/placeholder.svg?height=500&width=500&text=イヤホン4"
  ],
  description: "最新のノイズキャンセリング技術を搭載したワイヤレスイヤホン。クリアな音質と長時間バッテリーで、音楽体験を向上させます。",
  features: [
    "アクティブノイズキャンセリング",
    "最大30時間の連続再生",
    "IPX4防水規格",
    "高音質コーデック対応",
    "タッチコントロール"
  ],
  specifications: {
    "ブランド": "TechAudio",
    "モデル": "Pro-X1",
    "接続方式": "Bluetooth 5.2",
    "バッテリー": "30時間（ケース込み）",
    "防水性能": "IPX4",
    "重量": "5.2g（片耳）"
  },
  inStock: true,
  freeShipping: true,
  seller: "TechAudio公式ストア"
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-red-500 cursor-pointer">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-red-600 text-white mb-2">ベストセラー</Badge>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews}件のレビュー)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-red-600">
                  ¥{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ¥{product.originalPrice.toLocaleString()}
                </span>
                <Badge variant="destructive">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              {product.freeShipping && (
                <p className="text-green-600 font-medium">送料無料</p>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-2">主な機能</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  カートに追加
                </Button>
                <Button variant="outline" size="icon" className="py-3">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="py-3">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="outline" className="w-full py-3">
                今すぐ購入
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs text-gray-600">送料無料</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">1年保証</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs text-gray-600">30日返品可能</p>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">販売者情報</h4>
              <p className="text-sm text-gray-600">{product.seller}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.8 (2,456件)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">商品詳細</TabsTrigger>
            <TabsTrigger value="specifications">仕様</TabsTrigger>
            <TabsTrigger value="reviews">レビュー</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">商品詳細</h3>
              <div className="prose max-w-none">
                <p className="mb-4">
                  最新のノイズキャンセリング技術を搭載したワイヤレスイヤホンです。
                  周囲の騒音を効果的にカットし、クリアで高品質な音楽体験を提供します。
                </p>
                <p className="mb-4">
                  長時間のバッテリー持続時間により、一日中音楽を楽しむことができます。
                  また、IPX4防水規格により、運動中や雨の日でも安心してご使用いただけます。
                </p>
                <p>
                  タッチコントロール機能により、音楽の再生・停止、音量調整、
                  通話の応答などを簡単に操作できます。
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">製品仕様</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">カスタマーレビュー</h3>
              <div className="space-y-6">
                {/* Review summary */}
                <div className="flex items-center space-x-4 pb-6 border-b">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{product.rating}</div>
                    <div className="flex items-center justify-center">
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
                    <div className="text-sm text-gray-600">{product.reviews}件のレビュー</div>
                  </div>
                </div>
                
                {/* Individual reviews */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">田中太郎</span>
                        <span className="text-sm text-gray-500">2024年1月15日</span>
                      </div>
                      <p className="text-gray-700">
                        音質が非常に良く、ノイズキャンセリング機能も期待以上でした。
                        バッテリーの持ちも良く、満足しています。
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
