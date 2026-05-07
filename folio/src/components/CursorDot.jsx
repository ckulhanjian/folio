// src/components/CursorDot.jsx
import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      dotX += (mouseX - dotX) * 0.1
      dotY += (mouseY - dotY) * 0.1
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div className="dot" ref={dotRef}></div>
}