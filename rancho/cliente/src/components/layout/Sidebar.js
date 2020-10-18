import React from 'react';
import NuevoRancho from '../ranchos/NuevoRancho';
import ListadoRanchos from '../ranchos/ListadoProyectos';

const Sidebar = () => {
    return (  
        <aside>
            <h1>Control<spa> Proyectos</spa></h1>
            <NuevoRancho/>
            <div className = "proyectos">
                <h2>Proyectos</h2>
                <ListadoRanchos/>
            </div>
        </aside>
    );
}
 
export default Sidebar;