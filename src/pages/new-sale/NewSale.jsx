import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
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


const exampleProduct = [{
  id: 1,
  name: 'Auricular BT F9',
  price: 10.0
},
{
  id: 2,
  name: 'Auricular Cable Samsung',
  price: 5.0
}
];

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

    if (value.length > 0 && exampleProduct.name.toLowerCase().includes(value.toLowerCase())) {
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
    setSearchResults([]);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === productId) {
        return { ...p, quantity: p.quantity + 1};
      }
      return p;
    });
    setSelectedProducts(updatedProducts);
    setTotal(total + exampleProduct.price);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedProducts = selectedProducts.map(p => {
      if (p.id === productId && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setSelectedProducts(updatedProducts);
    
    if (total > 0) {
      setTotal(total - exampleProduct.price);
    }  
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

  function today() {
    return new Date().toISOString().split('T')[0];
  }

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="new-container">
          <Navbar />

          <Container>

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

              <Grid item xs={3}>
                <TextField
                  id="date"
                  label="Fecha de venta"
                  type="date"
                  defaultValue={today()}
                  sx={{ width: 180 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>Método de Pago</InputLabel>
                  <Select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    sx={{ width: 220 }}
                  >
                    <MenuItem value="efectivo">Efectivo</MenuItem>
                    <MenuItem value="debito">Débito</MenuItem>
                    <MenuItem value="credito">Credito</MenuItem>
                    <MenuItem value="mercadopago">MercadoPago</MenuItem>

                  </Select>
                </FormControl>
                 
              </Grid>

              <Grid item xs={6}>
                <Paper>
                  {searchResults.map((product) => (
                    <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                      <Typography>{product.name}</Typography>
                      <IconButton onClick={() => {
                        handleAddProduct(product);
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

              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                <Button variant="contained" color="primary" onClick={handleRegisterSale}>
                  Registrar Venta
                </Button>
              </Grid>
            </Grid>

          </Container>
        </div>
      </div>
    </>
  );
};

export default NewSale;
