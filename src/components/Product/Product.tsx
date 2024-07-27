import './styles.css'

type ProductT = {
    name: string
    image: string
    mark: string
    price: string
}

export function Product({ name, image, mark, price }: ProductT) {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={image} alt={name} />
            </div>
            <div className='product-card-wrapper'>
                <div className='product-info'>
                    <h2>{name}</h2>
                    <h3>{mark}</h3>
                </div>
                <div className='product-action'>
                    <div className='text-primary'>{price}</div>
                    <button>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}