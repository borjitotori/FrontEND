import React from 'react'

const alumno = (props) =>{
    return <p onClick={props.onclickalumno(props.nombre)}>Alumno:{props.name} - {props.nota}</p>
}

export default alumno