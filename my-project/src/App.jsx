import { Books } from './components/Books/Books'
import { BookById } from './components/BooksById/BooksById'
import { Characters } from './components/Characters/Characters'
import { CharactersById } from './components/CharactersById/CharactersById'
import { Home } from './components/Home/Home'
// import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/characters' element={<Characters/>}></Route>
        <Route path='/character/:index' element={<CharactersById/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/books/:index' element={<BookById/>}></Route>
      </Routes>
      
      {/* <Footer/> */}
    </>
  )
}

export default App
