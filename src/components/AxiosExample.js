import React, {useState, useEffect} from "react";
import axios from "axios";
//dung : GET PUT POST DELETE
 function AxiosExample() {
    const [data,setData] =useState([]);
    useEffect(() =>{
        axios.get('').then(response => {setData(response.data)})
        .then(response => {setData(response.data);})
       // .catch(error => {console.error(error);});
    },[]);
    return(
       <ul>
          {data.map(data=> (<li key={data.id}>{data.name}</li>))}
           
        </ul>
    );
 }
 export default AxiosExample;
 
 