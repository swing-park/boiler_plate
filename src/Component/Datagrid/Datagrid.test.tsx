import { render } from '@testing-library/react';

import Datagrid from './index';

import rowData from '@/fixtures/rowData';

describe('<Datagrid />', () => {
  it('Basic Datagrid가 렌더링 된다', () => {
    const { container } = render(<Datagrid rowData={rowData} />);

    expect(container).toMatchSnapshot();
  });
});
