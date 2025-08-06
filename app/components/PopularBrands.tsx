import Image from "next/image"
import Link from "next/link"

const brands = [
  {
    name: "Apple",
    logo: "/placeholder.svg?height=80&width=120&text=Apple",
    href: "/brand/apple"
  },
  {
    name: "Samsung",
    logo: "/placeholder.svg?height=80&width=120&text=Samsung",
    href: "/brand/samsung"
  },
  {
    name: "Sony",
    logo: "/placeholder.svg?height=80&width=120&text=Sony",
    href: "/brand/sony"
  },
  {
    name: "Nike",
    logo: "/placeholder.svg?height=80&width=120&text=Nike",
    href: "/brand/nike"
  },
  {
    name: "Adidas",
    logo: "/placeholder.svg?height=80&width=120&text=Adidas",
    href: "/brand/adidas"
  },
  {
    name: "Uniqlo",
    logo: "/placeholder.svg?height=80&width=120&text=Uniqlo",
    href: "/brand/uniqlo"
  }
]

export default function PopularBrands() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">人気ブランド</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow flex items-center justify-center"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              width={120}
              height={80}
              className="max-w-full h-auto"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
