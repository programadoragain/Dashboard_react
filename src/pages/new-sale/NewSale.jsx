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
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

// Producto de ejemplo
const NewSale = [{
  id: 1,
  name: 'Pendrive Sandisk 32gb',
  price: 10.0
},
{
  id: 2,
  name: 'Teclado inalambrico Genius',
  price: 22.0
}
];

const VentaForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Simula una búsqueda local del producto
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

  const handleRegisterSale = () => {
    // Aquí enviarías los datos al backend para registrar la venta
    const saleData = {
      products: selectedProducts,
      total: total,
      paymentMethod: paymentMethod
    };

    console.log('Venta registrada:', saleData);
    alert('Venta registrada exitosamente');

    // Limpiar formulario
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
        <Grid item xs={12}>
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

        <Grid item xs={12}>
          <Paper>
            {searchResults.map((product) => (
              <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Typography>{product.name} - ${product.price}</Typography>
                <IconButton onClick={() => handleAddProduct(product)}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>${product.price}</TableCell>
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
