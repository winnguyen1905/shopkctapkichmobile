"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ShoppingCart,
  Flame,
  Star,
  Shield,
  Zap,
  Sparkles,
  Target,
  Sword,
  Check,
  Facebook,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Random image categories for game items
const imageCategories = [
  "weapon",
  "rifle",
  "pistol",
  "knife",
  "box",
  "crate",
  "skin",
  "armor",
  "helmet",
  "grenade",
  "scope",
  "ammo",
]

// Random colors for variety
const randomColors = ["red", "blue", "green", "purple", "orange", "cyan", "pink", "yellow"]

export default function GamingShop() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [purchaseEffect, setPurchaseEffect] = useState<{
    id: string
    active: boolean
  }>({ id: "", active: false })

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Function to handle purchase animation
  const handlePurchase = (id: string) => {
    setPurchaseEffect({ id, active: true })
    setTimeout(() => {
      setPurchaseEffect({ id: "", active: false })
    }, 2000)
  }

  // Generate random image URL for game items
  const getRandomImage = (itemType: string) => {
    const category = imageCategories[Math.floor(Math.random() * imageCategories.length)]
    const color = randomColors[Math.floor(Math.random() * randomColors.length)]
    const size = 150 + Math.floor(Math.random() * 50)

    // Create a unique but deterministic image for each item type
    const seed = itemType.length + category.length
    return `/placeholder.svg?height=${size}&width=${size}&text=${category}_${color}_${seed}`
  }

  return (
    <div className="min-h-screen relative bg-zinc-900 text-white overflow-hidden">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          className="object-cover opacity-70"
          style={{ filter: "blur(8px)" }}
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 mb-4">
            <DiamondIcon size="large" className="w-full h-full" />
          </div>
          <div className="text-xl font-bold text-cyan-400">Đại lý kim cương giá rẻ bèo</div>
          <div className="mt-2 text-sm text-gray-400">Đang tải...</div>
        </div>
      </div>

      {/* Content Container - positioned above the background */}
      <div className="relative z-10">
        {/* Header Banner with animation */}
        <div className="flex flex-col">
          {/* Social Media Bar */}
          <div className="bg-black/80 py-2 overflow-hidden backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
              <div className="marquee-container relative overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Win Nguyễn"
                    href="https://www.facebook.com/profile.php?id=100025229797583"
                  />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Dương Minh Hiếu"
                    href="https://www.facebook.com/profile.php?id=100013402989630"
                  />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Đại Lý Kim Cương"
                    href="https://www.facebook.com/profile.php?id=61574000453529"
                  />
                  <SocialLink icon="zalo" text="Zalo: 0931331363" href="https://zalo.me/0931331363" />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Quốc Kiều"
                    href="https://www.facebook.com/profile.php?id=100071779684351"
                  />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Đại Lý Kim Cương"
                    href="https://www.facebook.com/profile.php?id=61574000453529"
                  />
                  <SocialLink icon="zalo" text="Zalo: 0931331363" href="https://zalo.me/0931331363" />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Lợi Nguyễn"
                    href="https://www.facebook.com/nguyen.thang.loi.544566/"
                  />
                  <SocialLink
                    icon="facebook"
                    text="Facebook: Đại Lý Kim Cương"
                    href="https://www.facebook.com/profile.php?id=61574000453529"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div
            className={`bg-gradient-to-r from-cyan-500/80 to-blue-500/80 p-4 rounded-b-xl shadow-lg transition-all duration-1000 backdrop-blur-sm ${
              isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Logo & Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 animate-[pulse_2s_infinite]">
                  <DiamondIcon size="large" className="w-full h-full" />
                </div>
                <span className="relative group">
                  ĐẠI LÝ KIM CƯƠNG x TẬP KÍCH MOBILE
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                </span>
              </h1>

              {/* Promo Text */}
              <div className="bg-orange-500/80 text-white text-sm sm:text-base px-4 py-2 rounded-full font-bold animate-pulse relative overflow-hidden backdrop-blur-sm text-center">
                <span className="relative z-10">Giá Siêu Rẻ Cho MB1, MN1, MN2 !!!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-yellow-500/0 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Product List with staggered animation */}
          <div className="lg:col-span-1 space-y-3">
            <h2
              className={`text-xl font-bold mb-4 border-b border-gray-700 pb-2 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-x-10"
              }`}
            >
              Sản Phẩm Nổi Bật
            </h2>

            {[
              {
                name: "Rabbit Gun (Thỏ Sniper)",
                price: "45K",
                diamonds: 690,
                color: "from-blue-600/80 to-blue-400/80",
                icon: <Sword className="h-5 w-5" />,
                delay: 200,
              },
              {
                name: "Ak Platinum, Súng 2K KC,...",
                price: "135K",
                diamonds: 2000,
                color: "from-indigo-600/80 to-indigo-400/80",
                icon: <Target className="h-5 w-5" />,
                delay: 300,
              },
              {
                name: "Thẻ đổi tên",
                price: "15k",
                diamonds: 198,
                color: "from-teal-600/80 to-teal-400/80",
                icon: <Star className="h-5 w-5" />,
                delay: 400,
              },
              {
                name: "LÉ BAO ĐÁ PHOENIX",
                price: "20K",
                diamonds: 300,
                color: "from-orange-600/80 to-orange-400/80",
                icon: <Flame className="h-5 w-5" />,
                delay: 500,
              },
              {
                name: "Súng Demon Các Loại",
                price: "159K",
                diamonds: 2680,
                color: "from-purple-600/80 to-purple-400/80",
                icon: <Zap className="h-5 w-5" />,
                delay: 600,
              },
              {
                name: "COMBO HS, LƯU ĐẠN FLASH",
                price: "60K",
                diamonds: 1000,
                color: "from-red-600/80 to-red-400/80",
                icon: <Sparkles className="h-5 w-5" />,
                delay: 700,
              },
              {
                name: "LỄ BAO ĐÁ DRAGON 20 Mảnh",
                price: "149K",
                diamonds: 2368,
                color: "from-pink-600/80 to-pink-400/80",
                icon: <Shield className="h-5 w-5" />,
                delay: 800,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <ProductItem
                  name={item.name}
                  price={item.price}
                  diamonds={item.diamonds}
                  color={item.color}
                  icon={item.icon}
                  onClick={() => handlePurchase(`list-${index}`)}
                  isPurchased={purchaseEffect.id === `list-${index}` && purchaseEffect.active}
                />
              </div>
            ))}

            <div
              className={`space-y-3 transition-all duration-700 delay-900 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-2">
                <div className="bg-cyan-900/50 p-1 rounded-full">
                  <Star className="h-4 w-4" />
                </div>
                Ưu Đãi Đặc Biệt
              </h3>

              <PremiumProductCard
                name="SÚNG 3Q, Súng 4980 Các Loại"
                price="349.999K"
                diamonds={4980}
                color="from-blue-800/80 to-blue-600/80"
                icon={<Target className="h-4 w-4" />}
                badge="TIẾT KIỆM"
              />

              <PremiumProductCard
                name="Hồn Thạch 4980 KC = 6 Hồn Thạch (Nếu đã có súng)"
                price="435K"
                diamonds={4980}
                color="from-blue-800/80 to-blue-600/80"
                icon={<Target className="h-4 w-4" />}
                badge="TIẾT KIỆM"
              />

              <PremiumProductCard
                name="SÚNG 5000 KC"
                price="435k"
                diamonds={5000}
                color="from-purple-800/80 to-purple-600/80"
                icon={<Sword className="h-4 w-4" />}
                badge="BÁN CHẠY"
              />

              <PremiumProductCard
                name="SÚNG DEMON 2690 KC"
                price="160K"
                diamonds={2690}
                color="from-red-800/80 to-red-600/80"
                icon={<Zap className="h-4 w-4" />}
                badge="HIẾM"
              />

              <PremiumProductCard
                name="SÚNG KHỦNG LONG 7000KC"
                price="445K"
                diamonds={7000}
                color="from-green-800/80 to-green-600/80"
                icon={<Sparkles className="h-4 w-4" />}
                badge="SIÊU HIẾM"
              />
            </div>
          </div>

          {/* Right Column - Product Grid with staggered animation */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-full">
                <h2
                  className={`text-xl font-bold mb-4 border-b border-gray-700 pb-2 transition-all duration-700 delay-300 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                >
                  Sản phẩm vĩnh viễn bán chạy
                </h2>
              </div>
              {[
                {
                  name: "Thẻ đổi tên",
                  image_url: "/images/rename.png",
                  description: "Thẻ đổi tên khác với xưng danh siêu cấp vip pro",
                  price: "14,999K",
                  diamonds: 198,
                  theme: "orange",
                  badge: "BÁN CHẠY",
                  icon: <Target className="h-5 w-5" />,
                  delay: 400,
                },

                {
                  name: "AK Platinum...",
                  description: "Súng trường tấn công quân sự với băng đạn mở rộng",
                  image_url: "/images/akplatinuim.png",
                  price: "135K",
                  diamonds: 2000,
                  theme: "purple",
                  badge: "MỚI",
                  icon: <Sword className="h-5 w-5" />,
                  delay: 500,
                },
                {
                  image_url: "/images/3q.png",
                  name: "Vũ Khí 3Q /Tự quy đổi 6 Hồn Thạch Nếu đã có súng",
                  description: "Vũ khí nhỏ gọn với tốc độ bắn và độ chính xác cao",
                  price: "435k",
                  diamonds: 4980,
                  theme: "cyan",
                  icon: <Zap className="h-5 w-5" />,
                  delay: 600,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <CreativeProductCard
                    id={`weapon-${index}`}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    diamonds={item.diamonds}
                    imagePath={item.image_url}
                    theme={item.theme as any}
                    badge={item.badge}
                    icon={item.icon}
                    onPurchase={handlePurchase}
                    isPurchased={purchaseEffect.id === `weapon-${index}` && purchaseEffect.active}
                  />
                </div>
              ))}

              <div className="col-span-full">
                <h2
                  className={`text-xl font-bold mb-4 border-b border-gray-700 pb-2 transition-all duration-700 delay-300 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                >
                  Sản phẩm Thời Hạn bán chạy
                </h2>
              </div>
              {[
                {
                  name: "Combo Giáp 6 (1 Tháng)",
                  description: "Bộ giáp mạnh vcl chỉ thua giáp 8",
                  price: "65.999K",
                  diamonds: 1000,
                  theme: "blue",
                  badge: "ĐỘC QUYỀN",
                  icon: <Star className="h-5 w-5" />,
                  image_url: "/images/amor.png",
                  delay: 1300,
                },

                {
                  name: "Băng Đạn 6 tháng",
                  description: "Súng trường tấn công quân sự với băng đạn mở rộng",
                  image_url: "/images/bangdan.png",
                  price: "45K",
                  diamonds: 312,
                  theme: "purple",
                  badge: "MỚI",
                  icon: <Sword className="h-5 w-5" />,
                  delay: 500,
                },
                {
                  image_url: "/images/lebaodemonss.png",
                  name: "Lễ Bao Demon",
                  description: "Vũ khí nhỏ gọn với tốc độ bắn và độ chính xác cao",
                  price: "45.999K",
                  diamonds: 600,
                  theme: "cyan",
                  icon: <Zap className="h-5 w-5" />,
                  delay: 600,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <CreativeProductCard
                    id={`weapon-${index}`}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    diamonds={item.diamonds}
                    imagePath={item.image_url}
                    theme={item.theme as any}
                    badge={item.badge}
                    icon={item.icon}
                    onPurchase={handlePurchase}
                    isPurchased={purchaseEffect.id === `weapon-${index}` && purchaseEffect.active}
                  />
                </div>
              ))}

              <div className="col-span-full">
                <h2
                  className={`text-xl font-bold mb-4 border-b border-gray-700 pb-2 transition-all duration-700 delay-700 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                >
                  Hộp Đặc Biệt
                </h2>
              </div>

              {[
                {
                  name: "Combo Học Sinh",
                  description: "Gói tối ưu với vũ khí, skin và đặc quyền độc quyền",
                  price: "64.999K",
                  diamonds: 1000,
                  theme: "green",
                  badge: "COMBO",
                  icon: <Sparkles className="h-5 w-5" />,
                  delay: 1100,
                  image_url: "/images/hs.png",
                },
                {
                  name: "Lựu Đạn Vĩnh Viễn 1000 KC",
                  description: "Gói tối ưu với vũ khí, skin và đặc quyền độc quyền",
                  price: "64.999",
                  diamonds: 1000,
                  theme: "green",
                  badge: "COMBO",
                  icon: <Sparkles className="h-5 w-5" />,
                  delay: 1100,
                  image_url: "/images/flash.png",
                },
                {
                  image_url: "/images/phoenix.png",
                  name: "Lễ Bao đá Phoenix 300KC",
                  description: "Hồi sinh từ tro tàn với trang bị huyền thoại dựa trên lửa",
                  price: "19.999K",
                  diamonds: 300,
                  theme: "orange",
                  badge: "HOT",
                  icon: <Flame className="h-5 w-5" />,
                  delay: 800,
                },
                {
                  image_url: "/images/leobaodragon.png",
                  name: "Lễ Bao Đá Dragon Các Loại 2368 KC",
                  description: "Giải phóng sức mạnh của rồng cổ đại với bộ sưu tập hiếm này",
                  price: "149K",
                  diamonds: 2368,
                  theme: "red",
                  badge: "HIẾM",
                  icon: <Shield className="h-5 w-5" />,
                  delay: 900,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <CreativeProductCard
                    id={`box-${index}`}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    diamonds={item.diamonds}
                    imagePath={item.image_url}
                    theme={item.theme as any}
                    badge={item.badge}
                    icon={item.icon}
                    onPurchase={handlePurchase}
                    isPurchased={purchaseEffect.id === `box-${index}` && purchaseEffect.active}
                  />
                </div>
              ))}

              <div className="col-span-full">
                <h2
                  className={`text-xl font-bold mb-4 border-b border-gray-700 pb-2 transition-all duration-700 delay-1000 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                >
                  Ưu Đãi Giới Hạn
                </h2>
              </div>
              {[
                {
                  name: "Súng Demon 2680 KC",
                  description: "Lưỡi kiếm địa ngục được rèn trong vực thẳm của địa ngục",
                  price: "159K",
                  diamonds: 2680,
                  theme: "purple",
                  badge: "HUYỀN THOẠI",
                  icon: <Zap className="h-5 w-5" />,
                  delay: 1200,
                  image_url: "/images/demonssv.png",
                },
                {
                  name: "Nhân vật hiếm",
                  description: "Skin nhân vật phiên bản giới hạn với hoạt ảnh tùy chỉnh",
                  price: "45K",
                  diamonds: 608,
                  theme: "pink",
                  badge: "ĐỘC QUYỀN",
                  icon: <Star className="h-5 w-5" />,
                  image_url: "/images/charactor.png",
                  delay: 1300,
                },
                {
                  name: "RABBIT GUN",
                  image_url: "/images/rabbitgun.png",
                  description: "Vũ 6hí chiến thuật chính xác cao với tầm nhìn và sát thương tăng cường",
                  price: "45K",
                  diamonds: 690,
                  theme: "blue",
                  badge: "BÁN CHẠY",
                  icon: <Target className="h-5 w-5" />,
                  delay: 400,
                },
                {
                  name: "Y Tá Quỷ (Zombie) 180 Ngày",
                  description: "Con y tá xinh đẹp với khả năng tàn hình dị vcl",
                  price: "28.999K",
                  diamonds: 380,
                  theme: "blue",
                  badge: "ĐỘC QUYỀN",
                  icon: <Star className="h-5 w-5" />,
                  image_url: "/images/doctor.png",
                  delay: 1300,
                },
                {
                  name: "Combo Thời Trang Khủng Long",
                  description: "Baby red cute",
                  price: "224.999K",
                  diamonds: 3000,
                  theme: "red",
                  badge: "ĐỘC QUYỀN",
                  icon: <Star className="h-5 w-5" />,
                  image_url: "/images/combokhunglong.png",
                  delay: 1300,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <CreativeProductCard
                    id={`special-${index}`}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    diamonds={item.diamonds}
                    imagePath={item.image_url}
                    theme={item.theme as any}
                    badge={item.badge}
                    icon={item.icon}
                    onPurchase={handlePurchase}
                    isPurchased={purchaseEffect.id === `special-${index}` && purchaseEffect.active}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Floating Message Button */}
        <Link
          href="https://www.facebook.com/profile.php?id=61574000453529"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Message us on Facebook"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-10 right-0 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat với chúng tôi
          </span>
        </Link>
      </div>
    </div>
  )
}

// Diamond icon with thunder flash effect
function DiamondIcon({
  size = "medium",
  className = "",
}: {
  size?: "small" | "medium" | "large"
  className?: string
}) {
  const [flashActive, setFlashActive] = useState(false)

  useEffect(() => {
    // Create random flash effect
    const flashInterval = setInterval(
      () => {
        setFlashActive(true)
        setTimeout(() => setFlashActive(false), 150)
      },
      Math.random() * 3000 + 2000,
    ) // Random interval between 2-5 seconds

    return () => clearInterval(flashInterval)
  }, [])

  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-10 h-10",
  }

  return (
    <div className={`relative ${className}`}>
      {/* Diamond image */}
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/images/diamond.png"
          alt="Diamond"
          width={size === "large" ? 40 : size === "medium" ? 24 : 16}
          height={size === "large" ? 40 : size === "medium" ? 24 : 16}
          className={`drop-shadow-[0_0_3px_rgba(34,211,238,0.7)] transition-all duration-100 ${
            flashActive ? "brightness-200" : "brightness-100"
          }`}
        />
      </div>

      {/* Thunder flash effect */}
      <div className={`absolute inset-0 bg-cyan-300 opacity-0 ${flashActive ? "animate-flash" : ""}`}></div>

      {/* Lightning bolts */}
      <div className="absolute inset-0">
        {flashActive && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-cyan-400 animate-thunder"></div>
            <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[1px] h-6 bg-white animate-thunder animation-delay-50"></div>
            <div className="absolute top-0 right-1/3 -translate-x-1/2 w-[1px] h-10 bg-blue-300 animate-thunder animation-delay-100"></div>
          </>
        )}
      </div>
    </div>
  )
}

// Small diamond icon with thunder effect for product items
function DiamondIconSmall({ diamonds }: { diamonds: number }) {
  const [flashActive, setFlashActive] = useState(false)

  useEffect(() => {
    // Create random flash effect
    const flashInterval = setInterval(
      () => {
        setFlashActive(true)
        setTimeout(() => setFlashActive(false), 150)
      },
      Math.random() * 4000 + 3000,
    ) // Random interval between 3-7 seconds

    return () => clearInterval(flashInterval)
  }, [])

  return (
    <div className="inline-flex items-center">
      <div className="relative mr-1">
        <div className="relative w-4 h-4">
          <Image
            src="/images/diamond.png"
            alt="Diamond"
            width={16}
            height={16}
            className={`transition-all duration-100 ${flashActive ? "brightness-200" : "brightness-100"}`}
          />
        </div>

        {/* Flash effect */}
        {flashActive && (
          <>
            <div className="absolute inset-0 bg-cyan-300 opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-cyan-400 animate-thunder-small"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-5 bg-white opacity-0 animate-thunder-small animation-delay-100"></div>
          </>
        )}
      </div>
      <span>{diamonds}</span>
    </div>
  )
}

function SocialLink({
  icon,
  text,
  href,
}: {
  icon: "facebook" | "zalo"
  text: string
  href: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors duration-300"
    >
      {icon === "facebook" ? (
        <div className="bg-blue-600 rounded-full p-1">
          <Facebook className="h-4 w-4" />
        </div>
      ) : (
        <div
          className="bg-blue-500 rounded-full p-1 flex items-center justify-center text-xs font-bold"
          style={{ width: "1.5rem", height: "1.5rem" }}
        >
          Z
        </div>
      )}
      <span className="text-sm">{text}</span>
    </Link>
  )
}

function ProductItem({
  name,
  price,
  diamonds,
  color,
  icon,
  onClick,
  isPurchased,
}: {
  name: string
  price: string
  diamonds: number
  color: string
  icon?: React.ReactNode
  onClick?: () => void
  isPurchased?: boolean
}) {
  return (
    <div
      className={`bg-gradient-to-r ${color} p-3 rounded-lg shadow-lg flex justify-between items-center relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        isPurchased ? "ring-2 ring-green-400" : ""
      } backdrop-blur-sm`}
      onClick={onClick}
    >
      {/* Purchase overlay */}
      {isPurchased && (
        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-10 animate-fadeIn">
          <div className="bg-green-500 rounded-full p-1">
            <Check className="h-5 w-5 text-white" />
          </div>
        </div>
      )}

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full hover:animate-shimmer"></div>

      <div className="font-bold flex items-center gap-2 relative z-0">
        {icon && <div className="bg-black/20 p-1 rounded-full">{icon}</div>}
        {name} <DiamondIconSmall diamonds={diamonds} />
      </div>
      <div className="font-bold">{price}</div>
    </div>
  )
}

function CreativeProductCard({
  id,
  name,
  description,
  price,
  diamonds,
  imagePath,
  theme = "blue",
  badge,
  icon,
  onPurchase,
  isPurchased,
}: {
  id: string
  name: string
  description: string
  price: string
  diamonds: number
  imagePath: string
  theme?: "blue" | "purple" | "cyan" | "orange" | "red" | "green" | "pink"
  badge?: string
  icon?: React.ReactNode
  onPurchase?: (id: string) => void
  isPurchased?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const themeStyles = {
    blue: {
      gradient: "from-blue-900/80 to-blue-700/80",
      highlight: "bg-blue-500/80",
      glow: "shadow-blue-500/50",
      border: "border-blue-600/80",
      textColor: "text-blue-400",
    },
    purple: {
      gradient: "from-purple-900/80 to-purple-700/80",
      highlight: "bg-purple-500/80",
      glow: "shadow-purple-500/50",
      border: "border-purple-600/80",
      textColor: "text-purple-400",
    },
    cyan: {
      gradient: "from-cyan-900/80 to-cyan-700/80",
      highlight: "bg-cyan-500/80",
      glow: "shadow-cyan-500/50",
      border: "border-cyan-600/80",
      textColor: "text-cyan-400",
    },
    orange: {
      gradient: "from-orange-900/80 to-orange-700/80",
      highlight: "bg-orange-500/80",
      glow: "shadow-orange-500/50",
      border: "border-orange-600/80",
      textColor: "text-orange-400",
    },
    red: {
      gradient: "from-red-900/80 to-red-700/80",
      highlight: "bg-red-500/80",
      glow: "shadow-red-500/50",
      border: "border-red-600/80",
      textColor: "text-red-400",
    },
    green: {
      gradient: "from-green-900/80 to-green-700/80",
      highlight: "bg-green-500/80",
      glow: "shadow-green-500/50",
      border: "border-green-600/80",
      textColor: "text-green-400",
    },
    pink: {
      gradient: "from-pink-900/80 to-pink-700/80",
      highlight: "bg-pink-500/80",
      glow: "shadow-pink-500/50",
      border: "border-pink-600/80",
      textColor: "text-pink-400",
    },
  }

  const style = themeStyles[theme]

  return (
    <Card
      className={`bg-gradient-to-b ${style.gradient} border-2 ${
        style.border
      } overflow-hidden transform transition-all duration-300 ${
        isHovered ? "scale-105 shadow-lg " + style.glow : ""
      } ${isPurchased ? "ring-2 ring-green-400" : ""} backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Purchase overlay */}
      {isPurchased && (
        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-20 animate-fadeIn">
          <div className="bg-green-500 rounded-full p-2">
            <Check className="h-6 w-6 text-white" />
          </div>
        </div>
      )}

      <div
        className={`p-2 ${style.highlight} text-center font-medium text-white flex justify-between items-center relative overflow-hidden`}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>

        <div className="flex items-center gap-2 z-10">
          {icon && (
            <div
              className={`bg-black/20 p-1 rounded-full transition-transform duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
            >
              {icon}
            </div>
          )}
          <span>{name}</span>
        </div>
        {badge && (
          <Badge
            variant="outline"
            className={`bg-black/30 text-white border-white/20 transition-all duration-300 ${
              isHovered ? "animate-pulse" : ""
            }`}
          >
            {badge}
          </Badge>
        )}
      </div>
      <div className="p-4 flex flex-col items-center relative">
        <div className={`relative w-full h-32 mb-3 transition-transform duration-500 ${isHovered ? "scale-110" : ""}`}>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
              <div className="w-8 h-8 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-contain transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Remove or comment out the gradient overlay div */}
          {/* <div className={`absolute inset-0 bg-gradient-to-t from-${theme}-900/50 to-transparent`}></div> */}
        </div>
        <p
          className={`text-xs text-gray-300 mb-3 text-center transition-all duration-300 ${
            isHovered ? style.textColor : ""
          }`}
        >
          {description}
        </p>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex items-center">
            <DiamondIconSmall diamonds={diamonds} />
          </div>
          <div className="font-bold text-yellow-400">{price}</div>
        </div>
        <Button
          className={`w-full mt-3 ${style.highlight} hover:bg-opacity-80 transition-all duration-300 group relative overflow-hidden`}
          onClick={() => onPurchase && onPurchase(id)}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>

          <ShoppingCart
            className={`h-4 w-4 mr-2 transition-transform duration-300 ${isHovered ? "animate-bounce" : ""}`}
          />
          <span className="relative z-10">Mua Ngay</span>
        </Button>
      </div>
    </Card>
  )
}

function PremiumProductCard({
  name,
  price,
  diamonds,
  color,
  icon,
  badge,
}: {
  name: string
  price: string
  diamonds: number
  color: string
  icon?: React.ReactNode
  badge?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-gradient-to-r ${color} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-white/10 backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full hover:animate-shimmer"></div>

        <div className="flex items-center justify-between p-3 relative z-10">
          <div className="flex items-center gap-2">
            {icon && (
              <div
                className={`bg-black/20 p-1.5 rounded-full transition-transform duration-300 ${
                  isHovered ? "scale-110" : ""
                }`}
              >
                {icon}
              </div>
            )}
            <div>
              <div className="font-bold flex items-center gap-1">
                {name}
                <DiamondIconSmall diamonds={diamonds} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="font-bold text-yellow-300 text-lg">{price}</div>
            {badge && (
              <Badge
                variant="outline"
                className={`bg-black/30 text-white border-white/20 transition-all duration-300 ${
                  isHovered ? "animate-pulse" : ""
                }`}
              >
                {badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Animated gradient line */}
        <div
          className={`h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-30"
          }`}
        ></div>

        {/* Particle effects on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white/70 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
