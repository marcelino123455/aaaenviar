import React from 'react';
import ComicsAutor from './ComicsAutor';
import Menu from './Menu'
import { Route,Routes } from 'react-router-dom';
import Autores from './Autor';
import Autores_inicio from './Autores_inicio';
import Inicio from './Inicio';
import Login from './Login';
import Signup from './Signup';
import Modal_signup from './Modal_signup'
function Rutas(){
    return(
            <Routes>
                <Route exact  path="" element={<Inicio />} />
                <Route exact   path="/autores" element={ <Autores_inicio /> } />
                <Route exact  path="/autores/comics/:id" element={ <ComicsAutor/> } />
                <Route exact  path="/signin" element={ <Login/> } />
                <Route exact  path="/signup" element={ <Signup/> } />
                <Route exact  path="/prueba" element={ <Modal_signup/> } />
            </Routes>

    )
}


export default Rutas;