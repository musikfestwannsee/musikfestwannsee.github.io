"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps {
  className?: string
  intensity?: number
  children?: React.ReactNode
}

export function ParallaxBackground({ className, intensity = 0.2, children }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      ref.current.style.transform = `translateY(${scrollY * intensity}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [intensity])

  return (
    <div className={cn("absolute inset-0 overflow-hidden z-0", className)}>
      <div ref={ref} className="absolute inset-0">
        {children}
      </div>
    </div>
  )
}

export function WaterParallaxBackground({ className }: { className?: string }) {
  return (
    <ParallaxBackground className={className} intensity={0.1}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-primary-950/70" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-30" />
      <div className="absolute inset-0 water-bg" />

      {/* Floating elements */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-primary-300/10 blur-3xl"></div>
      <div className="absolute top-[30%] right-[10%] w-64 h-64 rounded-full bg-primary-400/10 blur-3xl"></div>
      <div className="absolute bottom-[20%] left-[20%] w-48 h-48 rounded-full bg-primary-200/10 blur-3xl"></div>

      {/* Musical notes */}
      <div className="absolute top-[15%] right-[25%] text-white/5 text-9xl">♪</div>
      <div className="absolute bottom-[30%] left-[15%] text-white/5 text-8xl">♫</div>
      <div className="absolute top-[40%] left-[30%] text-white/5 text-7xl">♩</div>
    </ParallaxBackground>
  )
}

export function LightParallaxBackground({ className }: { className?: string }) {
  return (
    <ParallaxBackground className={className} intensity={0.05}>
      <div className="absolute inset-0 bg-gradient-to-b from-beige-100/50 to-white/30" />

      {/* Floating elements */}
      <div className="absolute top-[5%] right-[15%] w-48 h-48 rounded-full bg-primary-100/30 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-64 h-64 rounded-full bg-beige-200/30 blur-3xl"></div>
      <div className="absolute top-[40%] left-[5%] w-32 h-32 rounded-full bg-primary-50/30 blur-3xl"></div>

      {/* Musical notes */}
      <div className="absolute top-[25%] left-[20%] text-primary-200/10 text-8xl">♪</div>
      <div className="absolute bottom-[20%] right-[15%] text-primary-200/10 text-9xl">♫</div>
    </ParallaxBackground>
  )
}
