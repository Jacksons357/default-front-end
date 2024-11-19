import { DropdownMenuHamburguer } from './dropdown-menu-hamburguer'

export function HeaderHome() {
  return (
    <div className="flex justify-between items-center py-1 px-3">
      <h1>Logo</h1>

      <DropdownMenuHamburguer />
    </div>
  )
}
