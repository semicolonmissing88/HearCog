import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Image, Button } from 'react-bootstrap'
import { TbMenu2, TbX } from 'react-icons/tb'
import logo from "../../assets/images/header-light.svg";
import styles from "./index.module.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      to: "/",
      label: "Home"
    },
    {
      id: 2,
      to: "/about",
      label: "About"
    },
    {
      id: 3,
      to: "/contact",
      label: "Contact"
    },
    {
      id: 4,
      to: "/how-it-works",
      label: "How it Works"
    },
    {
      id: 5,
      to: "/join-as-provider",
      label: "Join as Provider"
    }
  ]
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </Link>
        <button type="button" className={styles.toggle} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <TbX size={26} /> : <TbMenu2 size={26} />}
        </button>
        <div className={`${styles.backdrop} ${open ? styles.open : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
        <div className={`${styles.menuWrap} ${open ? styles.open : ''}`}>
          <Link to="/" className={styles.menuLogo} onClick={() => setOpen(false)}>
            <Image src={logo} alt="Logo" />
          </Link>
          <nav className={styles.nav}>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.to} className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.cta}>
            <Link to="/signup" className="linkBtn" onClick={() => setOpen(false)}>Sign Up</Link>
            <Button onClick={() => { setOpen(false); navigate('/login'); }}><span>Login</span></Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
