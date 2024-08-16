import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",

    newTab: false,
  },
  {
    id: 4,
    title: "Login",
    newTab: false,
    submenu: [
      {
        id: 101,
        title: "CRM Portal",
        path: "https://biziverse.com/index.html",
        newTab: true,
      },
      {
        id: 102,
        title: "Web Mail",
        path: "https://www.zoho.com/mail/login.html",
        newTab: true,
      },
    ],
  },
];

const adminMenuData: Menu[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    newTab: false,
  },
  {
    id: 2,
    title: "Jobs",
    path: "/admin/jobs",
    newTab: false,
  },
];

export { adminMenuData, menuData };
