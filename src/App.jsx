import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Catalog from "./components/catalog/Catalog"
import About from "./components/about/About"
import Feature from "./components/feature/Feature"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollArrow from "./components/scrollarrow/ScrollArrow"

export default function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Catalog/>
      <About/>
      <Feature/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </div>
  )
}