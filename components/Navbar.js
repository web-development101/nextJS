import style from '@/styles/Home.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navItems}>
        <li className={style.navitem}><Link href="/">Home</Link></li>
        <li className={style.navitem}><Link href="/profile">profile</Link></li>
        <li className={style.navitem}><Link href="/about">about</Link></li>
      </ul>
  </nav>
  )
}

export default Navbar;