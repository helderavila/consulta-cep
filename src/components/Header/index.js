import React from 'react';

import { Background, Logo, HeaderContent } from './styles';

export default function Header() {
  return (
    <Background>
      <HeaderContent>
        <Logo to="/">ConsultaCep</Logo>
      </HeaderContent>
    </Background>
  );
}
