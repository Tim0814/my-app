"use client";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "./account/AuthContext";
import { useContext } from "react";
import { useAuth } from "./account/AuthContext";

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuth();

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
          {auth.email}
        </Toolbar>
      </AppBar>
    </div>
  );
}
