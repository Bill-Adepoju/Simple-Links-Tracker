import './App.css'

// importing components 
import Profile from './components/Profile'
import Links from './components/Links'
import Social from './components/Social'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      {/* rendering all the components in the app component  */}
      <Profile />
      <Links />
      <Social />
      <Footer />
      
    </div>
  )
}

export default App
