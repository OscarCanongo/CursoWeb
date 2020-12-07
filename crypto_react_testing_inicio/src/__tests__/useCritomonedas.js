import React from 'react';
import {render, screen} from '@testing-library/react';
import Formulario from '../components/Formulario';
import userEvent from '@testing-library/user-event';
import {monedas} from '../__mocks__/criptomonedas';

test('<useCriptomonedas />', () => {
    render (
        <Formulario/>
    );

    //Verificar la cantidad de opciones de monedas
    const monedasDropDown = screen.getByTestId('select-monedas');
    expect(monedasDropDown.children.length).toEqual(monedas.length + 1);
});