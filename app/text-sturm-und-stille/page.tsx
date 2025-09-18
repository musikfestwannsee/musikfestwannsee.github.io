'use client'

import { useEffect } from 'react'

export default function TextSturmUndStille() {
  useEffect(() => {
    window.location.href = '/text-sturm-und-stille.pdf'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to PDF...</p>
    </div>
  )
}