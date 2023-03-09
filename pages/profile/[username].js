import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
  <main className={styles.main}>
    <h3>Hello {username}!</h3>
  </main>)
}

export default Profile;