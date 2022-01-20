import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de transação de extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const { container } = render(<Transacao 
            data='19/01/2022'
            tipo='saque'
            valor='20.00'
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})