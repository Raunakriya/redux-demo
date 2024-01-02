import React,{useState} from "react";
import {connect} from 'react-redux'
import  buyCake  from '../redux/cakes/cakeAction';

function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e =>setNumber(e.target.value)}/>
            <button onClick={() =>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}



const mapStoreToProps = state =>{
    return {
        numOfCakes : state.cake.numOfCake
    }
}

const matchDispatchToProps = dispatch =>{
    return {
        buyCake : number=> dispatch(buyCake(number))
    } 
    
}

export default connect(mapStoreToProps,matchDispatchToProps)(NewCakeContainer)