import { use, useEffect, useState } from 'react'
import  ButtonUsage  from './btn.jsx'
import  ResponsiveAppBar  from './nav.jsx'
import  ActionAreaCard  from './card.jsx'





function App() {
  const [products , setproducts] = useState([])
  const [error , seterror] = useState(false)

  useEffect(()=>{

    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((res)=>{
    setproducts(res.products)
    console.log(res.products)
  })
  .catch(()=>{
    seterror(true)
  })



  },[])


  return (
    <>
<ResponsiveAppBar />

    <div      style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '1rem',
      padding: '1rem',
      margin: '1rem'
    }}>

       { products.map((product)=>{
         return <ActionAreaCard title={product.title} image={product.thumbnail} description={product.description} />
       })}

    </div>


    </>
  )
}

export default App
