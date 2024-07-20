import { Logo } from "../Logo/Logo"
import { SearchBar } from "../SearchBar/SearchBar"
import { UserBar } from "../UserBar/UserBar"

export function Header() {
  return (
    <header className="container-fluid p-0 border-bottom border-1 d-flex justify-content-between align-items-center" style={{height: '120px'}}>
      <Logo />
      <SearchBar />
      <UserBar />
    </header>
  )
}