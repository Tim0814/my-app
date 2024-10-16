"use client";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button
            color="inherit"
            variant={pathname === "/" ? "outlined" : "text"}
            onClick={() => router.push("/")}
          >
            主頁面
          </Button>
          <Button
            color="inherit"
            variant={pathname === "/product" ? "outlined" : "text"}
            onClick={() => router.push("/product")}
          >
            產品管理
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
