import React from 'react'
import Profesor from './Profesor/Profesor'
import Alumno from './Alumno/Alumno'
import './Profesor/Profesor.css'
import './Alumno/Alumno.css'

const asignatura = (props) =>{

    return <div>
        Asignatura:{props.name}
        <div className="Profesor">
            <Profesor name={props.prof}/>
        </div>
        <div className="Alumno">
            <Alumno name={props.al1} nota={props.n1} onclickalumno={props.onclickalumno}/>
            <Alumno name={props.al2} nota={props.n2} onclickalumno={props.onclickalumno}/>
            <Alumno name={props.al3} nota={props.n3} onclickalumno={props.onclickalumno}/>
        </div>
    </div>
}

export default asignatura