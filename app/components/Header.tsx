"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, Heart, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-sm py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>🎉 新春セール開催中！最大70%OFF</span>
          <div className="hidden md:flex space-x-4">
            <Link href="/seller" className="hover:underline">出品者向け</Link>
            <Link href="/help" className="hover:underline">ヘルプ</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              ECマート
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="商品を検索..."
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-full focus:border-red-500"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 rounded-full bg-red-600 hover:bg-red-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5 mr-1" />
              お気に入り
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5 mr-1" />
                  <span className="hidden md:inline">アカウント</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/login">ログイン</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register">新規登録</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders">注文履歴</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile">プロフィール</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="商品を検索..."
              className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-full"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full bg-red-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-2">
            <Link href="/category/fashion" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              ファッション
            </Link>
            <Link href="/category/electronics" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              家電・PC
            </Link>
            <Link href="/category/home" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              ホーム・キッチン
            </Link>
            <Link href="/category/beauty" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              美容・コスメ
            </Link>
            <Link href="/category/sports" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              スポーツ
            </Link>
            <Link href="/category/books" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              本・雑誌
            </Link>
            <Link href="/category/toys" className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600">
              おもちゃ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
