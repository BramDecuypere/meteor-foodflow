import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Recipes", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Groceries list",
    href: "/groceries",
    icon: ShoppingCartIcon,
    current: false,
  },
  // { name: "Projects", href: "#", icon: FolderIcon, current: false },
  // { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: InboxIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
