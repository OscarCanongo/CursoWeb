import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';
import useEvent from '@testing-library/user-event';

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
    useEvent.click(btnSubmit);

    //Revisar por la alerta
    const alerta = screen.getByTestId('alerta')
    expect(alerta).toBeInTheDocument();
    expect(alerta.textContent).toBe('Todos los campos son obligatorios');
    expect(alerta.tagName).toBe('P');
});

test('<Formulario /> Validación de formulario', () => {
    render(
        <Formulario
            crearCita = {crearCita}
        />
    );

    useEvent.type(screen.getByTestId('mascota'), 'Hook');
    useEvent.type(screen.getByTestId('propietario'), 'Oscar');
    useEvent.type(screen.getByTestId('fecha'), '2020-12-07');
    useEvent.type(screen.getByTestId('hora'), '15:33');
    useEvent.type(screen.getByTestId('sintomas'), 'Solo duerme');

    //Click en botón de submit
    const btnSubmit = screen.getByTestId('btn-submit');
    useEvent.click(btnSubmit);

    //Revisar por la alerta
    const alerta = screen.queryByTestId('alerta')
    expect(alerta).not.toBeInTheDocument();

    //Crear cita y comprobar que la función se haya llamado
    expect(crearCita).toHaveBeenCalled();
    expect(crearCita).toHaveBeenCalledTimes(1);
});