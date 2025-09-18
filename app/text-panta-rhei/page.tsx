'use client'

import { useEffect } from 'react'

export default function TextPantaRhei() {
  useEffect(() => {
    window.location.href = '/text-panta-rhei.pdf'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to PDF...</p>
    </div>
  )
}