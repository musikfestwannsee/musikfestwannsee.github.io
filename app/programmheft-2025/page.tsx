'use client'

import { useEffect } from 'react'

export default function Programmheft2025() {
  useEffect(() => {
    window.location.href = '/programmheft_2025.pdf'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to PDF...</p>
    </div>
  )
}