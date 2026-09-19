import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Articles from './components/Articles'
import Tutorials from './components/Tutorials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Profile />
      <Portfolio />
      <Gallery />
      <Articles />
      <Tutorials />
      <Footer />
    </div>
  )
}

export default App