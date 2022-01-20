import React from 'react';
import { render, screen } from '@testing-library/react';
import api from './api';
import App from './App';

jest.mock('./api');

describe('Requisições para a API', () => {
    it('Exibir lista de transações através da API', async () => {

        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
              },
              {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
              }
        ]);

        render(<App />);

        const saque = await screen.findByText('saque');
        expect(saque).toBeInTheDocument();

        const transacoes = screen.getByTestId('transacoes');
        expect(transacoes.children.length).toBe(2);
    })
})