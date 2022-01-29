import { ReactNode } from 'react';
import * as C from './styles';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <C.Wrapper>{children}</C.Wrapper>;
}
