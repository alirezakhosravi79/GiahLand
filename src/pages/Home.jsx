import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ProductApartemani1 from "../components/ProductApartemani1"
import ProductApartemani2 from "../components/ProductApartemani2"
import Utility from "../components/Utility"

function Home() {
  return (
    <>
      <Navbar />
      <hr />
      <Hero />
      <Utility />
      <ProductApartemani1 />
      <ProductApartemani2 />
    </>
  )
}

export default Home