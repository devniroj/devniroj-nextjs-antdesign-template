import { MenuItemType } from "antd/es/menu/interface";

//export type MenuItem = { key: string; label: string ;link: string; icon: string; children?: MenuItem[] };
export const adminMenuItems: MenuItemType[] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "KPIs",
  },
  {
    key: "2",
    label: "Users",
  }
];

export const clientMenuItems: MenuItemType[] = [
    {
      key: "1",
      label: "Dashboard",
    }
  ];