import { MenuItemType } from "antd/es/menu/interface";
import DashboardPage from "../admin/dashboard/page";
import { Router, useRouter } from "next/router";
//export type MenuItem = { key: string; label: string ;link: string; icon: string; children?: MenuItem[] };
export const adminMenuItems: MenuItemType[] = [
  {
    key: "1",
    label: "Dashboard",
    onClick: () => {
      const router = useRouter();
      router.push("/admin/dashboard");
    }
  },
  {
    key: "2",
    label: "KPIs",
    onClick: () => {
      const router = useRouter();
      router.push("/admin/kpis/default");
    }
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
