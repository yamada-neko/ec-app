import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">ECマート</h3>
            <p className="text-gray-400 mb-4">
              日本最大級のオンラインショッピングモール
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">カスタマーサービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white">ヘルプセンター</Link></li>
              <li><Link href="/contact" className="hover:text-white">お問い合わせ</Link></li>
              <li><Link href="/returns" className="hover:text-white">返品・交換</Link></li>
              <li><Link href="/shipping" className="hover:text-white">配送について</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">会社概要</Link></li>
              <li><Link href="/careers" className="hover:text-white">採用情報</Link></li>
              <li><Link href="/press" className="hover:text-white">プレスリリース</Link></li>
              <li><Link href="/investor" className="hover:text-white">投資家情報</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-white">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie設定</Link></li>
              <li><Link href="/legal" className="hover:text-white">特定商取引法</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ECマート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
