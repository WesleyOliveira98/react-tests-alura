import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
    it('Exibir o saldo da conta como valor monetário', () => {
        render(<Conta saldo={1000} />);
        const saldo = screen.getByTestId('saldo-conta');
        expect(saldo.textContent).toBe('R$ 1000');
    })
    it('Quando o botão é clicado, chama a função de realizar transação', () => {
        const funcaoRealizarTransacao = jest.fn();
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);
        fireEvent.click(screen.getByText('Realizar operação'));
        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })
})