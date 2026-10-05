'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { crestUrl } from '@/lib/club-data'

const navItems = [['/', 'Inicio'], ['/plantilla', 'Plantilla'], ['/clasificacion', 'Liga'], ['/pichichis', 'Pichichis']]

export function ClubShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <div className="club-app">
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><img src={crestUrl} alt="Escudo de Grizzlies Futsal Club" /><span>GRIZZLIES<small>FUTSAL CLUB</small></span></Link>
      <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'main-nav open' : 'main-nav'}>{navItems.map(([href, label]) => <Link key={href} href={href} className={pathname === href || (href !== '/' && pathname.startsWith(href)) ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/plantilla">Ver plantilla <ArrowUpRight /></Link></nav>
    </header>
    {children}
    <footer className="site-footer"><div className="footer-brand"><img src={crestUrl} alt="" /><div><strong>GRIZZLIES</strong><span>FUTSAL CLUB · EST. 2026</span></div></div><span>© 2026 Grizzlies Futsal Club</span><span>La fuerza nace de la manada.</span></footer>
  </div>
}
