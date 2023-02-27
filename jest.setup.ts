import { cloneElement, ReactElement } from 'react';
import dotenv from 'dotenv';
import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

dotenv.config({
  path: './.env.test',
});

type MockNextLinkProps = {
  children: ReactElement;
}

jest.mock('next/link', () => {
  return (({ children, ...props }: MockNextLinkProps) => cloneElement(children, props));
});

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));