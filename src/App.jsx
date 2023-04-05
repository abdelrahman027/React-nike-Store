import './App.css'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './componets'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'

function App() {

  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true} />
        <FlexContent endpoint={highlight} ifExists={true} />

        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />

      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
