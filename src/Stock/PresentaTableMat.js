import React, {Component} from 'react';
import { nativeTouchData } from 'react-dom/test-utils';
import {Table,Col,Row} from 'reactstrap';
import PresentaMat from './PresentaMat';


export default class PresentaTableMat extends Component{
    render(){
        const matNom = this.props.matNom
        var nom = new Set();
        matNom.map(nombre=>(
         nom.add(nombre.m_nombre)
            
        ))
       
       
        console.log(nom);
       
        return(
            <div>
                <h1>{nom} </h1>
            <Table>
            <Row>
                   <Col sm={4} md={3}>
                     <b>Codigo</b>
                   </Col>
                   <Col sm={4} md={3}>
                      <b>Referencia</b>
                   </Col>
                   <Col sm={4} md={3}>
                    <b>medida</b> 
                   </Col>
                   <Col sm={6} md={3}>
                       <b>Unidades</b>
                       

                   </Col>
               </Row>

            { matNom.map(material=>(
               
               <PresentaMat mat={material}></PresentaMat>
            ))} 
            </Table>
            </div>
        )
    }
}