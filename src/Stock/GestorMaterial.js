import React, {Component} from 'react';
import MaterialMap from './MaterialMap';
import Stock from './stock';


export default class GestorMaterial extends Component{
    state = {
        resultados:[],
        length:0,
        buscador:false
    }
    _handleContenido=(data,length)=>{
        this.setState({
            resultados:data,
            length:length,
            buscador: true
        });
        console.log(this.state)
    }

    _showMaterial=()=>{
        return this.state.length ===0
        ?<p>Prueba</p>
        : <MaterialMap listaMap={this.state.resultados}/>

    }
    render()
    
{
        return(
            <div>
                <Stock entrega={this._handleContenido}/>
               {this.state.buscador
                ? this._showMaterial()
                : null 
               }
            </div>
        )
    }
}








