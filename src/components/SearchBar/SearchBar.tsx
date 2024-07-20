export function SearchBar() {
  return (
    <div className="border border-1 rounded-2 d-flex align-items-center px-3">
      <input type="text" className="py-3 border-0" placeholder="O que você está procurando?" style={{outline: 'none', width: '400px'}}/>
      <img width="20" height="20" src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search--v1"/>
    </div>
  )
}