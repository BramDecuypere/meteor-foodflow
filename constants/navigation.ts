import {
  HomeIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  {
    id: "dashboard",
    name: "My Recipes",
    href: "/dashboard",
    icon: HomeIcon,
    current: false,
  },
  {
    id: "active-list",
    name: "Active Groceries",
    href: "/groceries",
    icon: ShoppingCartIcon,
    current: false,
  },
  {
    id: "seasonal",
    name: "Seasonal Fruits & Vegies",
    href: "/seasonal-fruits-and-vegetables",
    icon: SunIcon,
    current: false,
  },
  {
    id: "settings",
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
