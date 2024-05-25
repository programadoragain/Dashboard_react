import { React, useState, useEffect } from 'react';
import './List.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAll, getPhoto } from '../../api/productService';


const ProducTablePrime = () => {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        getAll().then(response => {
            const products = response.data;
            setData(products);
            //console.log(products);    

            const imageUrls = {};
            for (const product of products) {
                const imageUrl = getImage(product.imagen);
                imageUrls[product.id] = imageUrl;
            }
            setImageUrls(imageUrls);

        }).catch(error => console.log(error.message));
    }, []);

    const getImage = (rutaImagenProducto) => {
        getPhoto(rutaImagenProducto).then(response => {
            const url = URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            return url;
        }).catch(error => console.log(error.message));
    }

    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-header'>Nombre</TableCell>
                            <TableCell className='table-header'>Marca</TableCell>
                            <TableCell className='table-header'>Modelo</TableCell>
                            <TableCell className='table-header'>Categoria</TableCell>
                            <TableCell className='table-header'>Valor</TableCell>
                            <TableCell className='table-header'>Stock</TableCell>
                            <TableCell className='table-header'>Activo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className='table-cell'>
                                    <div className="cell-image">
                                        {imageUrls[row.id] ? (<img src={imageUrls[row.id]} alt={row.name} className='image' />) :
                                            (<div>Sin imagen</div>)}
                                        {row.nombre}
                                    </div>
                                </TableCell>
                                <TableCell className='table-cell'>{row.marca}</TableCell>
                                <TableCell className='table-cell'>{row.modelo}</TableCell>
                                <TableCell className='table-cell'>{row.categoria}</TableCell>
                                <TableCell className='table-cell'>{row.valor}</TableCell>
                                <TableCell className='table-cell'>{row.stock}</TableCell>
                                <TableCell className='table-cell'>{row.activo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProducTablePrime