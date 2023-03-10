import style from '@/styles/Home.module.css'
import pageNotFound  from'../asset/404.png'
import Link from 'next/link'

const fourOFour = () => {
  return (
    <main className={style.main}>
      <h3>Page not found</h3>
      <Link href="/">Click here to go back home</Link>
    </main>
  )
}

export default fourOFour