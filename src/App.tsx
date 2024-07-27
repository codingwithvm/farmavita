import { useEffect, useState } from "react"
import { api } from "./utils/api"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Header />
      {
        products.length <= 0 ?
          <div className="loading">
            <div className="loading spinner-border text-primary" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p>Carregando...</p>
          </div> :
          <Main products={products} />
      }
      <Footer />
    </>
  )
}