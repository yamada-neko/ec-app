import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "ファッション",
    image: "/placeholder.svg?height=200&width=200&text=ファッション",
    href: "/category/fashion",
    color: "bg-pink-100"
  },
  {
    name: "家電・PC",
    image: "/placeholder.svg?height=200&width=200&text=家電",
    href: "/category/electronics",
    color: "bg-blue-100"
  },
  {
    name: "ホーム・キッチン",
    image: "/placeholder.svg?height=200&width=200&text=ホーム",
    href: "/category/home",
    color: "bg-green-100"
  },
  {
    name: "美容・コスメ",
    image: "/placeholder.svg?height=200&width=200&text=美容",
    href: "/category/beauty",
    color: "bg-purple-100"
  },
  {
    name: "スポーツ",
    image: "/placeholder.svg?height=200&width=200&text=スポーツ",
    href: "/category/sports",
    color: "bg-orange-100"
  },
  {
    name: "本・雑誌",
    image: "/placeholder.svg?height=200&width=200&text=本",
    href: "/category/books",
    color: "bg-yellow-100"
  },
  {
    name: "おもちゃ",
    image: "/placeholder.svg?height=200&width=200&text=おもちゃ",
    href: "/category/toys",
    color: "bg-red-100"
  },
  {
    name: "食品・飲料",
    image: "/placeholder.svg?height=200&width=200&text=食品",
    href: "/category/food",
    color: "bg-indigo-100"
  }
]

export default function CategoryGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">カテゴリから探す</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group text-center"
          >
            <div className={`${category.color} rounded-full p-4 mb-2 group-hover:scale-105 transition-transform`}>
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
