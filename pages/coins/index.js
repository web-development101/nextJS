import Axios from "axios"
import style from '@/styles/Home.module.css'

const CoinList = ({ coinData }) => {
  console.log(coinData)
  return (
    <div className={style.main}>{coinData.coins.map((coin) => {
      return (
        <div>
          <h1>{coin.name}</h1>
          <img src={coin.icon} />
          <p>{coin.price}</p>
        </div>)
  })}</div>)
}

export const getStaticProps = async () => {
  const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

  return {
    props: {
      coinData: data.data,
    }
  }
}
export default CoinList