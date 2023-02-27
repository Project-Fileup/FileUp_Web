import { render } from '@/libs/testing';
import Header from '..';

describe('헤더 컴포넌트 테스트', () => {
  it('스냅샷 출력 결과물과 동일하게 렌더링된다.', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});