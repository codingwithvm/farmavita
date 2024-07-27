import { Product } from '../Product/Product'
import './styles.css'

export function Main() {
    const products = [
        {
            name: "Paracetamol 500mg",
            image: "https://farmaciasklyns.vtexassets.com/arquivos/ids/169021/7501159580359.jpg?v=637935373134370000",
            mark: "Medley",
            price: "R$10,50",
            category: "Medicamentos"
        },
        {
            name: "Ibuprofeno 100mg",
            image: "https://drogariasp.vteximg.com.br/arquivos/ids/529410-1000-1000/264571---ibuprofeno-suspensao-oral-100mgml-generico-neo-quimica-20ml-1.jpg?v=637790026889930000",
            mark: "Neo Química",
            price: "R$15,90",
            category: "Medicamentos"
        },
        {
            name: "Dipirona 1g",
            image: "https://drogariasp.vteximg.com.br/arquivos/ids/1091584-1000-1000/402010---analgesico-novalgina-1g-sanofi-10-comprimidos-efervescentes_0004_7891058015756_2.png?v=638503593487100000",
            mark: "Novalgina",
            price: "R$8,75",
            category: "Medicamentos"
        },
        {
            name: "Omeprazol 20mg",
            image: "https://vipfarma.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/m/ems-caixa-generica_75.jpg",
            mark: "EMS",
            price: "R$22,30",
            category: "Medicamentos"
        },
        {
            name: "Aspirina 100mg",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8teauOfCXu3JGcD6E_3jKOCzfkeTt3Nxfg&s",
            mark: "Bayer",
            price: "R$12,40",
            category: "Medicamentos"
        },
        {
            name: "Vitamina C 500mg",
            image: "https://drogariasp.vteximg.com.br/arquivos/ids/1018942-1000-1000/725668-Vitamina-C-Cewin-500mg-com-30-Comprimidos-1.jpg?v=638403450219030000",
            mark: "Cewin",
            price: "R$18,50",
            category: "Vitaminas e Suplementos"
        },
        {
            name: "Ômega 3 1000mg",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fpviPD6zZei8HJQcOnBA93qKycipS4mGNg&s",
            mark: "Sundown Naturals",
            price: "R$45,90",
            category: "Vitaminas e Suplementos"
        },
        {
            name: "Multivitamínico Centrum",
            image: "https://drogafuji.vtexassets.com/arquivos/ids/185741/20718.jpg?v=637715704396700000",
            mark: "Centrum",
            price: "R$59,90",
            category: "Vitaminas e Suplementos"
        },
        {
            name: "Vitamina D 2000 UI",
            image: "https://product-data.raiadrogasil.io/images/3456299.webp",
            mark: "D-prev",
            price: "R$28,75",
            category: "Vitaminas e Suplementos"
        },
        {
            name: "Magnésio Dimalato 500mg",
            image: "https://m.media-amazon.com/images/I/51gR4Oc0RuL._AC_UF1000,1000_QL80_.jpg",
            mark: "Lauton",
            price: "R$34,30",
            category: "Vitaminas e Suplementos"
        },
        {
            name: "Shampoo Hidratação Intensa",
            image: "https://drogariasp.vteximg.com.br/arquivos/ids/571385-500-500/182729---shampoo-pantene-hidratacao-400ml-1-.jpg?v=637831213674630000",
            mark: "Pantene",
            price: "R$25,90",
            category: "Higiene Pessoal"
        },
        {
            name: "Condicionador Reconstrução Completa",
            image: "https://www.drogariaminasbrasil.com.br/media/product/53d/condicionador-dove-reconstrucao-completa-400ml-50e.jpg",
            mark: "Dove",
            price: "R$27,50",
            category: "Higiene Pessoal"
        },
        {
            name: "Sabonete Líquido Intimo Suave",
            image: "https://images.tcdn.com.br/img/img_prod/969594/nivea_sabonete_liquido_intimo_suave_250ml_449_1_d9f5f407c287640b6090322c9e059913.jpg",
            mark: "Nivea",
            price: "R$18,30",
            category: "Higiene Pessoal"
        },
        {
            name: "Creme Dental Branqueador",
            image: "https://drogariasp.vteximg.com.br/arquivos/ids/472225-1000-1000/602370---Creme-Dental-Colgate-Luminous-White-Instant-70g-1.jpg?v=637662066552270000",
            mark: "Colgate",
            price: "R$12,90",
            category: "Higiene Pessoal"
        },
        {
            name: "Desodorante Antitranspirante",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Pior347N5krmZHpegDgKw6hQ7zEZp5VesQ&s",
            mark: "Rexona",
            price: "R$15,80",
            category: "Higiene Pessoal"
        }
    ]

    // Filtrando categorias
    const categories = products.reduce<string[]>((acc, product) => {
        if (!acc.includes(product.category)) {
            acc.push(product.category)
        }
        return acc
    }, [])

    return (
        <main>
            {
                categories.map((category, key) => (
                    <section id={category} key={key}>
                        <h1>{category}</h1>
                        <div className="product-row">
                            {
                                products.map((product, key) => (
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