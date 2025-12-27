import Navbar from './Navbar'
import ProductList from './ProductList'
import Footer from './Footer'

export default function Homepage() {


  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />  
        <ProductList  className="flex-grow"/>
        <Footer/>
    </div>
  )
}   