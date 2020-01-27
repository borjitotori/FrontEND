import React, { Component } from 'react';
import Asignatura from './Asignatura/Asignatura'
import './App.css';
import './Asignatura/Asignatura.css'

class App extends Component {

  state = {
    data:[
      {
      asignatura:'ED',
      profesor:'Alberto',
      alumnos: [
      {nombre:"Jaime", nota:"1", view: true},
      {nombre:"Juan", nota:"2", view: true},
      {nombre:"Jose", nota:"3", view: true},
      ]
      },
    {
      asignatura:'UI',
      profesor:'Alverto',
      alumnos: [
      {nombre:"Julian", nota:"4", view: true},
      {nombre:"Jesus", nota:"5", view: true},
      {nombre:"Jericho", nota:"6",view: true}
      ]
      }
    ]

  }

  alumnoclickhandler = () =>{

  }

  render() {
    return (
      <div className="App">
        <div className="Asignatura">
          <Asignatura name={this.state.data[0].asignatura} 
          prof={this.state.data[0].profesor} 
          al1={this.state.data[0].alumnos[0].nombre} n1={this.state.data[0].alumnos[0].nota}
          al2={this.state.data[0].alumnos[1].nombre} n2={this.state.data[0].alumnos[1].nota}
          al3={this.state.data[0].alumnos[2].nombre} n3={this.state.data[0].alumnos[2].nota}
          onclickalumno={this.alumnoclickhandler}/>
        </div>
        <div className="Asignatura">
          <Asignatura name={this.state.data[1].asignatura} 
          prof={this.state.data[1].profesor}  
          al1={this.state.data[1].alumnos[0].nombre} n1={this.state.data[1].alumnos[0].nota} 
          al2={this.state.data[1].alumnos[1].nombre} n2={this.state.data[1].alumnos[1].nota} 
          al3={this.state.data[1].alumnos[2].nombre} n3={this.state.data[1].alumnos[2].nota}/>
        </div>
      </div>
    );
  }
}

export default App;
