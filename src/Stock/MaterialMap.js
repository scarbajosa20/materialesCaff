import React, { Component } from 'react';
import PresentaTableMat from './PresentaTableMat';


export default class MaterialMap extends Component {
    render(){
        const listaMat =this.props.listaMap;
        console.log(listaMat);
        return(
            <div>
            {listaMat.map(material=>(
              
               <PresentaTableMat matNom={material}></PresentaTableMat>
            ))}
            </div>
        )
    }

}

