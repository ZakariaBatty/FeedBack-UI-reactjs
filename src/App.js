import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLinks from './components/AboutIconLinks'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedBackList />
                            </>
                        } />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLinks />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
