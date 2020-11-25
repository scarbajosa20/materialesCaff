import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,Table,Row,Col,Button} from 'reactstrap'; 
import "./css_stock.css";
import axios from 'axios';

const baseUrl = "http://localhost:3000/api/material/";

export default class PresentaMat extends Component{
    constructor(props){
        super(props)
       this.state={
           unidades:null,
       }
        
    }
     changeUnit=(b)=>{
        var id = b.target.id
        var unidades;
        var sumar=document.getElementById(id+"input").value;

            axios.get(baseUrl+"?_where=(m_codigo,eq,"+id+")")
            .then(response=>{
                console.log(response);
                unidades= response.data[0].m_unidades;
              
                this.setState={
                    unidades :unidades
                }
                console.log(unidades)
            })
            
            .catch(error=>{
                console.log(error);
            })
            unidades+=sumar;
            console.log(sumar)
        }   
        
        
           
        
   
    render(){
        const mat = this.props.mat;
        const codigo = mat.m_codigo
        console.log(codigo)
        return (
            <div id={mat.m_nombre+mat.m_codigo}>
           

               <Row>
                   <Col sm={4} md={3}>
                       {mat.m_codigo}
                   </Col>
                   <Col sm={4} md={3}>
                       {mat.m_referencia}
                   </Col>
                   <Col sm={4} md={3}>
                       {mat.m_medida}
                   </Col>
                   
                    <Col sm={6} md={3}>
                       {mat.m_unidades}
                        <input 
                        type="number"
                        name="units"
                        id={codigo+"input"}
                        class="unidades"
                        
                        />
                        <Button color="primary"
                        onClick={this.changeUnit.bind(this)}
                         id={codigo}
                         >
                            +
                        </Button>
                        <Button 
                        color="danger"
                        id={codigo}
                        >
                           -
                        </Button>
                        
                    </Col>
                   
               </Row>
            </div>
        )
    
    }
    
}