import Footer from '../Elements/Footer'
import About from '../Elements/About'
import Experiance from '../Elements/Experiance'
import Projects from '../Elements/Projects'

const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experiance />
      <Projects />
      <Footer />
    </main>
  )
}

export default Main
