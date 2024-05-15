import React, { useState } from 'react';
import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import '../../DatatableSource';
import { userColumns, userRows } from '../../DatatableSource';
import { Link } from 'react-router-dom';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Datatable = () => {
  const [data,setData]= useState(userRows);

  const handleDelete= (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/1' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>
                <VisibilityOutlinedIcon fontSize='medium' />
              </div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>
              <DeleteForeverOutlinedIcon fontSize='medium' />
            </div>
          </div>
        );
      }
    }
  ]

  return (
    <div className='datatable'>
      <div className='title'>
        Listado de Usuarios
        <Link to='/users/new' className='link-button'>
          + Nuevo Usuario
        </Link>
      </div>
      <DataGrid className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}

export default Datatable