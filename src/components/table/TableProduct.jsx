import { React, useState, useEffect } from 'react';
import './TableProduct.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAll, getPhoto } from '../../api/productService';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link } from 'react-router-dom';


const TableProduct = () => {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);


    async function loadDataAndImages() {
        const response = await getAll();
        const products = response.data;
        setData(products);

        const imageUrlObjectArray = {};

        await Promise.all(products.map(async (product) => {
            try {
                const imageResponse = await getPhoto(product.imagen);
                const imageUrl = URL.createObjectURL(new Blob([imageResponse.data], { type: imageResponse.headers['Content-Type'] }));
                imageUrlObjectArray[product.id] = imageUrl;
            } catch (error) {
                console.log("Error al procesar la imagen para el producto con ID " + product.id + ": " + error.message);
            }
        }));

        setImageUrls(imageUrlObjectArray);
        console.log(imageUrls);
    }

    useEffect(() => {
        loadDataAndImages();
    }, []);

    const acciones = () => {
        return (
            <div className=''>
                <Link to='/users/1' style={{ textDecoration: 'none' }}>
                    <div className=''>
                        <VisibilityOutlinedIcon fontSize='medium' />
                    </div>
                </Link>
                <div className='' onClick={() => handleDelete("1")}>
                    <DeleteForeverOutlinedIcon fontSize='medium' />
                </div>
            </div>
        );
    }

    const handleDelete= (id) => {
        setData(data.filter((item) => item.id !== id));
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
                            <TableCell className='table-header'>Acciónes</TableCell>
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
                                <TableCell className='table-cell'>{acciones}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableProduct