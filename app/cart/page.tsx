import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cartItems = [
  {
    id: 1,
    name: "ワイヤレスイヤホン Pro",
    price: 15800,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100&text=イヤホン",
    inStock: true
  },
  {
    id: 2,
    name: "スマートウォッチ Series 5",
    price: 32800,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100&text=スマートウォッチ",
    inStock: true
  },
  {
    id: 3,
    name: "ノートパソコン 14インチ",
    price: 89800,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100&text=ノートPC",
    inStock: false
  }
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping
  const tax = Math.floor(subtotal * 0.1)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            ショッピングを続ける
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">ショッピングカート</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">カート内商品 ({cartItems.length}点)</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b last:border-b-0">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-red-600">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.inStock ? "在庫あり" : "在庫切れ"}
                        </p>
                        <p className="text-lg font-semibold text-red-600 mt-2">
                          ¥{item.price.toLocaleString()}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          className="w-16 text-center"
                          min="1"
                        />
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 mt-2">
                          <Trash2 className="h-4 w-4 mr-1" />
                          削除
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">注文内容</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>送料</span>
                  <span className="text-green-600">無料</span>
                </div>
                <div className="flex justify-between">
                  <span>消費税</span>
                  <span>¥{tax.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>合計</span>
                  <span className="text-red-600">¥{total.toLocaleString()}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3">
                レジに進む
              </Button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  ¥3,000以上のご注文で送料無料
                </p>
              </div>
              
              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">プロモーションコード</h3>
                <div className="flex space-x-2">
                  <Input placeholder="コードを入力" className="flex-1" />
                  <Button variant="outline">適用</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
