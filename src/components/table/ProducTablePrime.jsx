import React, { useEffect } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getAll } from '../../api/productService';

const ProducTablePrime = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getAll().then(response => {
        setData(response.data);
        console.log(response.data);    
    }).catch(error => console.log(error.message));
  }, []);
  

  return (
    <div className='datatable'>
        <DataTable 
            value={data}
            responsiveLayout="scroll"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            dataKey="id"
            paginator
            emptyMessage="No se encontraron registros."
            className="datatable-responsive"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos"
            rows={10}
        >
            <Column field="id" sorteable header="ID" />
            <Column field="fecha" sorteable header="Fecha" />
            <Column field="nombre" sorteable header="Nombre" />
            <Column field="marca" sorteable header="Marca" />
            <Column field="modelo" sorteable header="Modelo" />
            <Column field="categoria.nombre" sorteable header="Categoria" />
            <Column field="valor" sorteable header="Precio" />
            <Column field="stock" sorteable header="Stock" />
        </DataTable>
    </div>
  )
}

export default ProducTablePrime