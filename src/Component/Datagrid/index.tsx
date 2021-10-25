import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

type GridRowsProp = GridRowData[];
interface GridRowData {
  [key: string]: any;
}

const DataGrid = () => {
  const rowData: GridRowsProp = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  return (
    <div className='ag-theme-alpine' style={{ height: 600, width: 600 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field='make' sortable filter />
        <AgGridColumn field='model' sortable filter />
        <AgGridColumn field='price' sortable filter />
      </AgGridReact>
    </div>
  );
};

export default DataGrid;
