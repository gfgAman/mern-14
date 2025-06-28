// import data from '../assets/data.json'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {

      const data = await axios.get('http://localhost:3000/products')
      console.log(data?.data?.products);
      setData(data?.data?.products)
    }
    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Product listing</h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ml-9'>
        {
          data.map(({ name, img, price, category, inStock }) => (
            <div key={name}>
              <Card name={name} img={img} category={category} inStock={inStock} price={price} />
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Home