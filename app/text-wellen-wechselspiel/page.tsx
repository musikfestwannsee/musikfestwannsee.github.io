'use client'

import { useEffect } from 'react'

export default function TextWellenWechselspiel() {
  useEffect(() => {
    window.location.href = '/text-wellen-wechselspiel.pdf'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to PDF...</p>
    </div>
  )
}