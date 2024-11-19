import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { FiMenu } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'

const menuItems = [
  {
    title: 'Link',
    faIcon: <IoMdHome size={18} />,
  },
  {
    title: 'Link',
    faIcon: <IoMdHome size={18} />,
  },
]

export function DropdownMenuHamburguer() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FiMenu size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          {menuItems.map(item => (
            <DropdownMenuItem className="py-3">
              <h3>{item.title}</h3>
              <DropdownMenuShortcut>{item.faIcon}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
