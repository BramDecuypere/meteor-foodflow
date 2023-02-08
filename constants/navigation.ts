import {
  HomeIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "My Recipes", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Active Groceries",
    href: "/groceries",
    icon: ShoppingCartIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Cog6ToothIcon,
    current: false,
  },
  // { name: "Projects", href: "#", icon: FolderIcon, current: false },
  // { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: InboxIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
