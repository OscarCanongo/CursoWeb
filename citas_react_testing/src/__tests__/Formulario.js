import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';

const crearCita = jest.fn();

test('<Formulario /> Cargar el formulario y recisar que todo sea correcto', () => {
    //const wrapper = render(<Formulario/>);
    //wrapper.debug();
    render(<Formulario
        crearCita = {crearCita}
    />);
    expect(screen.getByText('Crear Cita')).toBeInTheDocument();

    //Heading
    const titulo = screen.getByTestId('titulo');
    expect(titulo.tagName).toBe('H2');
    expect(titulo.textContent).toBe('Crear Cita');

    //Botón
    const boton = screen.getByTestId('btn-submit');
    expect(boton.tagName).toBe('BUTTON');
    expect(boton.textContent).toBe('Agregar Cita');
});

test('<Formulario /> Validación de formulario', () => {
    render(
        <Formulario
            crearCita = {crearCita}
        />
    );

    //Click en botón de submit
    const btnSubmit = screen.getByTestId('btn-submit');
    fireEvent.click(btnSubmit);

    //Revisar por la alerta
    expect(screen.getByTestId('alerta')).toBeInTheDocument();
    expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
    expect(screen.getByTestId('alerta').tagName).toBe('P');
});