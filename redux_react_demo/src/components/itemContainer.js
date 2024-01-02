import React from "react";
import {connect} from 'react-redux'
import buyCake from '../redux/cakes/cakeAction'
import buyIceCream from '../redux/iceCream/iceCreamAction'

function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy item</button>
        </div>
    )
}

const mapStoreToProps =(state ,ownProps) =>{
    const itemState=ownProps.cake
    ? state.cake.numOfCakes
    :state.iceCream.numOfIceCream

    return{
        item :itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake
    ? () => dispatch(buyCake())
    :() => dispatch(buyIceCream())

    return{
        buyItem :dispatchFunction
    } 
}

export default connect(mapStoreToProps,mapDispatchToProps)(ItemContainer);