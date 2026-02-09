import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeTitles = {
  '/': 'HearCog - Home',
  '/home': 'HearCog - Home',
  '/about': 'HearCog - About',
  '/contact': 'HearCog - Contact',
  '/how-it-works': 'HearCog - How it Works',
  '/join-as-provider': 'HearCog - Join as Provider',
}

export function usePageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = routeTitles[pathname] ?? 'HearCog'
  }, [pathname])
}
