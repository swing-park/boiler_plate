import Counter from '@/Component/Counter';
import Datagrid from '@/Component/Datagrid';
import rowData from '@/fixtures/rowData';

const App = () => (
  <div className='App' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <Counter />
    <Datagrid rowData={rowData} />
  </div>
);

export default App;
