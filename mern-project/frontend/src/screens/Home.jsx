import data from '../assets/data.json'
import Card from '../components/Card'
const Home = () => {
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