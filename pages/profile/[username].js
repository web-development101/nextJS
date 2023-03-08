import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
  <main className={styles.main}>
    <div>Hello {username}!</div>
  </main>)
}

export default Profile;