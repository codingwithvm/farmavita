import './styles.css'

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo text-primary">FarmaVita</div>
        <div className="menu">
          <img src="./menu-icon.png" alt="menu" />
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="O que você está procurando?" />
        <img src="./search-icon.png" alt="search" />
      </div>
      <div className="user">
        <div className='cart'>
          <img src="./cart-icon.png" alt="cart" />
          CARRINHO
        </div>
        <div className='account'>
          <img src="./user-icon.png" alt="user" />
          ACESSAR CONTA</div>
      </div>
    </header>
  )
}