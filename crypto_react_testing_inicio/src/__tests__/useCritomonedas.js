import React from 'react';
import {render, screen} from '@testing-library/react';
import Formulario from '../components/Formulario';
import userEvent from '@testing-library/user-event';
import {monedas, criptos} from '../__mocks__/criptomonedas';
import axios from 'axios';

const mockAxios = axios;
const guardarMoneda = jest.fn();
const guardarCriptomoneda = jest.fn();

test('<useCriptomonedas />', async () => {
    //Consumir datos falsos
    mockAxios.get = jest.fn().mockResolvedValue({
        data: criptos
    })
    
    render (
        <Formulario/>
    );

    //Verificar la cantidad de opciones de monedas
    const monedasDropDown = screen.getByTestId('select-monedas');
    expect(monedasDropDown.children.length).toEqual(monedas.length + 1);

    //Verificar la cantidad de opciones de las criptomonedas
    const opciones = screen.findAllByTestId('opcion-cripto');
    expect( await opciones ).toHaveLength(4);

    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    //Seleccionar Bitcoin y Dolares
    //userEvent.selectOptions(screen.getByTestId('select-monedas'), 'USD');
    //userEvent.selectOptions(screen.getByTestId('opcion-cripto'), 'BTC');

    //Submit al formulario
    //userEvent.click(screen.getByTestId('submit'));

    //Verificar que las funcionas se hayan llamado
   // expect(guardarMoneda).toHaveBeenCalled();
    //expect(guardarMoneda).toHaveBeenCalledTimes(1);
});