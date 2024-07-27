import { useState } from 'react'
import Header from '../Fragments/Header'
import Main from '../Fragments/Main'

const LandingPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  function handleMouse(e: { clientX: number; clientY: number }) {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <div
        className="__variable_20b187 group/spotlight relative"
        onMouseMove={handleMouse}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
