import { Product, ProductT } from '../Product/Product'
import './styles.css'

export function Main({products}:any) {
    const categories = products.reduce((acc: any, product: any) => {
        if (!acc.includes(product.category)) {
            acc.push(product.category)
        }
        return acc
    }, [])

    return (
        <main>
            {
                categories.map((category: string, key: number) => (
                    <section id={category} key={key}>
                        <h1>{category}</h1>
                        <div className="product-row">
                            {
                                products.map((product: ProductT, key: number) => (
                                    product.category === category ?
                                        <Product
                                            key={key}
                                            image={product.image}
                                            name={product.name}
                                            mark={product.mark}
                                            price={product.price}
                                        />
                                        : ''
                                ))
                            }
                        </div>
                    </section>
                ))
            }
        </main>
    )
}