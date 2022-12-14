import React , {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import './Home.css';

const Home = ()=>{

const [data,setData] = useState([]);

const loadData = async () => {
    const response = await axios.get()
}


    return (
        <div>
            <h2></h2>
   
     </div>
    )
}

export default Home