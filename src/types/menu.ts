export interface MenuItem {
  name: string;
  href: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}
