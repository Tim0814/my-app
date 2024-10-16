import {
  Box,
  Button,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  ListSubheader,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ProductList() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [products, setProducts] = useState([
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 },
  ]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "white", padding: "16px" }}>
      {!visible ? (
        <Box>
          <Button variant="contained" onClick={show}>
            新增產品
          </Button>
          <List
            subheader={
              <ListSubheader
                component="div"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Product list
              </ListSubheader>
            }
            aria-label="product list"
          >
            {products.map((product, index) => (
              <ListItemButton
                divider
                key={product.desc}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" style={{ color: "black" }}>
                      {product.desc}
                    </Typography>
                  }
                  secondary={product.price}
                />
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      ) : (
        // 將 ProductAdd 從 ProductList 中獨立出來，並通過 props 傳遞狀態變數
        <ProductAdd
          products={products}
          setProducts={setProducts}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </Container>
  );
}

function ProductAdd({ products, setProducts, visible, setVisible }) {
  const [newProduct, setNewProduct] = useState({ desc: "", price: "" });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const update = () => {
    if (newProduct.desc && newProduct.price) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setVisible(false);
      // 清空輸入框
      setNewProduct({ desc: "", price: "" });
      console.log(newProduct);
    } else {
      alert("請填寫產品描述和價格");
    }
  };

  const hide = () => {
    setVisible(false);
    // 清空輸入框
    setNewProduct({ desc: "", price: "" });
  };

  return (
    <Dialog open={true} onClose={hide} aria-labelledby="新增產品">
      <DialogTitle>新增產品</DialogTitle>
      <DialogContent>
        <TextField
          label="產品描述"
          variant="outlined"
          name="desc"
          value={newProduct.desc}
          onChange={handleClick}
        />
        <br />
        <TextField
          label="產品價格"
          variant="outlined"
          name="price"
          type="number" // 確保為數字輸入框
          value={newProduct.price}
          onChange={handleClick}
        />
        <br />
      </DialogContent>
      <DialogActions>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Button variant="contained" color="primary" onClick={update}>
          新增
        </Button>
      </DialogActions>
    </Dialog>
  );
}
