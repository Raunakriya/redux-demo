import React from "react";
import { connect } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamAction";


function iceCreamContainer(props) {
    return (
        <div>
            <h1>Number of iceCream - {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    )
}

const mapStoreToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream : ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStoreToProps,mapDispatchToProps)(iceCreamContainer)