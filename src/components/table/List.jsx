import React from 'react';
import './List.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    function createData(
        id,
        date,
        image,
        product,
        amount,
        total,
        methodPayment,
        vendor,
    ) {
        return { id, date, image, product, amount, total, methodPayment, vendor };
    }

    const rows = [
        createData(100, '02/05/24', 'https://m.media-amazon.com/images/I/61ERDR3tATL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 'Pendrive Sandisk 32GB', 2.0, 32.500, 'Mercado Pago', 'Fernando'),
        createData(101, '02/05/24', 'https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX569_.jpg', 'Teclado Mecanico Xtrike', 1.0, 43.500, 'Efectivo', 'Fernando'),
        createData(102, '01/05/24', 'https://m.media-amazon.com/images/I/61INtCQzv2L.__AC_SX300_SY300_QL70_FMwebp_.jpg', 'PC Gamer Ryzen', 1.0, 890.000, 'Visa 12c', 'Graciela'),
        createData(103, '01/05/24', 'https://m.media-amazon.com/images/I/61q+eFPnhEL._AC_SX679_.jpg', 'Auricular Bluetooth F9', 1, 19.900, 'Mercado Pago', 'Graciela')
    ];

    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-header'>Id</TableCell>
                            <TableCell className='table-header'>Fecha</TableCell>
                            <TableCell className='table-header'>Producto</TableCell>
                            <TableCell className='table-header'>Cantidad</TableCell>
                            <TableCell className='table-header'>Total</TableCell>
                            <TableCell className='table-header'>Metodo Pago</TableCell>
                            <TableCell className='table-header'>Vendedor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className='table-cell'>{row.id}</TableCell>
                                <TableCell className='table-cell'>{row.date}</TableCell>
                                <TableCell className='table-cell'>
                                    <div className="cell-image">
                                        <img src={row.image} alt="" className='image' />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className='table-cell'>{row.amount}</TableCell>
                                <TableCell className='table-cell'>$ {row.total}</TableCell>
                                <TableCell className='table-cell'>{row.methodPayment}</TableCell>
                                <TableCell className='table-cell'>{row.vendor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default List