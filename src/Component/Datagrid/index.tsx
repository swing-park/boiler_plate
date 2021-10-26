import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

interface GridRowData {
  [key: string]: any;
}

type GridRowsProp = GridRowData[];

interface Props {
  rowData: GridRowsProp;
}

const Datagrid = ({ rowData }: Props) => (
  <div className='ag-theme-material' style={{ height: 600, width: 600 }}>
    <AgGridReact rowData={rowData}>
      <AgGridColumn field='make' sortable filter />
      <AgGridColumn field='model' sortable filter />
      <AgGridColumn field='price' sortable filter />
    </AgGridReact>
  </div>
);

export default Datagrid;
