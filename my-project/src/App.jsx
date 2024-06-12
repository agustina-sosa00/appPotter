import { Books } from './components/Books/Books'
import { Characters } from './components/Characters/Characters'
// import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Characters/>
      <Books/>
      {/* <Footer/> */}
    </>
  )
}

export default App
