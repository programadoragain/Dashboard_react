import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  RemoveCircle as RemoveCircleIcon,
  AddCircle as AddCircleIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';


const exampleProduct = {
  id: 1,
  name: 'Producto de Ejemplo',
  price: 10.0
};

const NewSale = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2 && exampleProduct.name.toLowerCase().includes(value.toLowerCase())) {
      setSearchResults([exampleProduct]);
    } else {
      setSearchResults([]);
    }
  };

  const handleAddProduct = (product) => {
    const existingProduct = selectedProducts.find(p => p.id === product.id);
    if (existingProduct) {
      setSelectedProducts(selectedProducts.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === productId) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setSelectedProducts(updatedProducts);
    setTotal(total + exampleProduct.price);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === productId && p.quantity > 1) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setSelectedProducts(updatedProducts);
    setTotal(total - exampleProduct.price);
  };

  const handleRemoveProduct = (productId) => {
    const productToRemove = selectedProducts.find(p => p.id === productId);
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    setTotal(total - (productToRemove.price * productToRemove.quantity));
  };

  const handleRegisterSale = () => {
    const saleData = {
      products: selectedProducts,
      total: total,
      paymentMethod: paymentMethod,
      date: selectedDate
    };

    console.log('Venta registrada:', saleData);
    alert('Venta registrada exitosamente');

    setSelectedProducts([]);
    setTotal(0);
    setPaymentMethod('');
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Registro de Venta</Typography>
        </Toolbar>
      </AppBar>


      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Buscar Producto"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              )
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Paper>
            {searchResults.map((product) => (
              <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Typography>{product.name} - ${product.price}</Typography>
                <IconButton onClick={() => {
                  handleAddProduct(product);
                  setSearchTerm('');
                  }}>
                  <AddIcon />
                </IconButton>
              </div>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre de Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio Unitario</TableCell>
                  <TableCell align="right">Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDecreaseQuantity(product.id)}>
                        <RemoveCircleIcon />
                      </IconButton>
                      {product.quantity}
                      <IconButton onClick={() => handleIncreaseQuantity(product.id)}>
                        <AddCircleIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleRemoveProduct(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h6">Total: ${total}</Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Método de Pago</InputLabel>
            <Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <MenuItem value="efectivo">Efectivo</MenuItem>
              <MenuItem value="debito">Débito</MenuItem>
              <MenuItem value="mercadopago">MercadoPago</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
          <Button variant="contained" color="primary" onClick={handleRegisterSale}>
            Registrar Venta
          </Button>
        </Grid>
      </Grid>

    </Container>
  );
};

export default NewSale;
