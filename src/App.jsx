import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import HowItWorks from './pages/HowItWorks'
import JoinProvider from './pages/JoinProvider'
import SignIn from './pages/Sign_In'
import SignUp from './pages/Sign_Up'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <BrowserRouter basename="/HearCog">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="join-as-provider" element={<JoinProvider />} />
        </Route>

        {/* authentication flows use a stripped-down layout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
