import React, { Component } from 'react';
import axios from 'axios';  
import "./css_stock.css";




const baseUrl = "http://localhost:3000/api/material/";

export default class Stock extends Component{
    constructor(props){
        super(props);
        this.state={
        data:[],
        ready:true
        }
    }


    recojerDatosMat=()=>{
        var URL = baseUrl+"distinct?_fields=m_nombre"
        axios.get(URL)
        .then(response=>{
            console.log(response.data)
            const {data=[]}=response;
            console.log(data);
            var mat =[];
            var length=0
           
                if(this.state.ready===true){
                    data.forEach(element => {
                        console.log(element.m_nombre);
                        var URL = baseUrl + "?_where=(m_nombre,eq,"+element.m_nombre+")";
                        axios.get(URL)
                        .then(response=>{
                            console.log(response);
                            const {status, data=[]}= response;
                            console.log(status);
                            if(status===200){
                                const lengthData = data.length;
                                mat.push(data)
                               length +=lengthData;
                                console.log(mat,length);
                                this.props.entrega(mat,length)
                            }

                         })
                        .catch(error=>{
                            console.log(error);
                        })
                    });
       
                }
        })
     
     

    }


   

    render (){
      
        return(
            <div  >
            <button onClick={this.recojerDatosMat}></button>
               
            <h1 >MATERIALES</h1>
           
            </div>
        )
    }

}
