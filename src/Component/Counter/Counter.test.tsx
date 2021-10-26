import { fireEvent, render, Matcher, MatcherOptions } from '@testing-library/react';

import Counter from './index';

let getByTestId: (
  text: Matcher,
  options?: MatcherOptions | undefined,
  waitForElementOptions?: unknown
) => HTMLElement;

beforeEach(() => {
  getByTestId = render(<Counter />).getByTestId;
});

describe('<Counter />', () => {
  it('헤더 텍스트가 렌더링 된다.', () => {
    expect(getByTestId('header')).toHaveTextContent('My Counter');
  });

  it('카운트의 초기값은 0이다.', () => {
    expect(getByTestId('cnt')).toHaveTextContent('0');
  });

  it('카운터 인풋의 초기값이 0이다.', () => {
    expect(getByTestId('input')).toHaveValue(0);
  });

  it('플러스버튼이 +를 포함하여 렌더링된다.', () => {
    expect(getByTestId('plus-btn')).toHaveTextContent('+');
  });

  it('마이너스버튼이 -를 포함하여 렌더링된다.', () => {
    expect(getByTestId('minus-btn')).toHaveTextContent('-');
  });

  it('사용자가 input을 변경했을때, setInputValue가 작동한다.', () => {
    fireEvent.change(getByTestId('input'), {
      target: { value: '5' },
    });

    expect(getByTestId('input')).toHaveValue(5);
  });

  it('사용자가 플러스 버튼을 클릭하면, cnt의 값이 증가한다.', () => {
    fireEvent.click(getByTestId('plus-btn'));

    expect(getByTestId('cnt')).toHaveTextContent('1');
  });

  it('사용자가 마이너스 버튼을 클릭하면, cnt의 값이 감소한다.', () => {
    fireEvent.click(getByTestId('minus-btn'));

    expect(getByTestId('cnt')).toHaveTextContent('Count : -1');
  });

  it('사용자가 input을 변경하고, 플러스 버튼을 클릭하면, cnt의 값이 증가한다.', () => {
    fireEvent.change(getByTestId('input'), {
      target: { value: '5' },
    });

    fireEvent.click(getByTestId('plus-btn'));

    expect(getByTestId('cnt')).toHaveTextContent('Count : 5');
  });

  it('사용자가 input을 변경하고, 마이너스 버튼을 클릭하면, cnt의 값이 감소한다.', () => {
    fireEvent.change(getByTestId('input'), {
      target: { value: '5' },
    });

    fireEvent.click(getByTestId('minus-btn'));

    expect(getByTestId('cnt')).toHaveTextContent('Count : -5');
  });

  it('카운트가 100을 초과하면, 카운트 텍스트 색상은 빨간색이 된다.', () => {
    fireEvent.change(getByTestId('input'), {
      target: { value: '101' },
    });
    fireEvent.click(getByTestId('plus-btn'));
    expect(getByTestId('cnt')).toHaveStyle('color : red');
  });

  it('카운트가 0미만이 되면, 카운트 텍스트 색상은 파란이 된다.', () => {
    fireEvent.change(getByTestId('input'), {
      target: { value: '1' },
    });
    fireEvent.click(getByTestId('minus-btn'));
    expect(getByTestId('cnt')).toHaveStyle('color : blue');
  });
});
