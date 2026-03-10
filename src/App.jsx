import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import HowItWorks from './pages/HowItWorks'
import JoinProvider from './pages/JoinProvider'
import ServiceDetail from './pages/ServiceDetail'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'

function App() {
  return (
    <BrowserRouter basename="/HearCog">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="join-as-provider" element={<JoinProvider />} />
          <Route path="service/:slug" element={<ServiceDetail />} />
        </Route>
        <Route path="login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="signup" element={<AuthLayout />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="forgot-password" element={<AuthLayout />}>
          <Route index element={<ForgotPassword />} />
        </Route>
        <Route path="reset-password" element={<AuthLayout />}>
          <Route index element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
