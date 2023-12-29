const { applyMiddleware } = require('redux');
const redux=require('redux')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore;
const combinedRedcer=redux.combineReducers;
const logger=reduxLogger.createLogger();

const BYE_CAKE = 'BYE_CAKE'
const BYE_ICECREAM='BYE_ICECREAM'

//________ Action ______________//
function buyCake() {
    return {
        type: 'BYE_CAKE',
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: 'BYE_ICECREAM'
    }
}
//______ No of cake in inital state_____//
const initialState = {
    numOfCakes: 10,
    numOfIceCream:20
}

const cakeState={
    numOfCakes:10
}
const iceCreamState={
    numOfIceCream:20
}
//___________Reduser to find data after action perform ______//
// (previousState ,action) => nextState

const reducer = (state = initialState, action )=> {
    switch (action.type) {
        case BYE_CAKE: return {
            ...state,    // copy store data
            numOfCakes: state.numOfCakes - 1  // update only action value
        }
        case BYE_ICECREAM: return {
            ...state,    // copy store data
            numOfIceCream: state.numOfIceCream - 1  // update only action value
        }
        default: return state
    }
}

const cakeReducer= (state = cakeState, action )=> {
    switch (action.type) {
        case BYE_CAKE: return {
            ...state,    // copy store data
            numOfCakes: state.numOfCakes - 1  // update only action value
        }
        default: return state
    }
}

const iceCreamReducer= (state = iceCreamState, action )=> {
    switch (action.type) {
        case BYE_ICECREAM: return {
            ...state,    // copy store data
            numOfIceCream: state.numOfIceCream - 1  // update only action value
        }
        default: return state
    }
}

const rootReducer=combinedRedcer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

//const store=createStore(reducer);  //inslize store  single reduser

//const store=createStore(rootReducer);  //multiple reducer

const store=createStore(rootReducer,applyMiddleware(logger))

console.log('Initial state' ,store.getState());  //declear inital store 
const unscribe=store.subscribe(()=>{    // listner
    // console.log('Upadate state' ,store.getState());  
})

store.dispatch(buyCake());  // dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unscribe() 