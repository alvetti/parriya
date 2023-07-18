import { useState } from "react";

function useCounter(initialValue=0){

    const[counter, setCounter] = useState(initialValue);

    const increase=()=>{
        setCounter(counter +1);
    };

    const decrease=()=>{
        if(counter === 0){
            return;
        }
        setCounter(counter -1);
    };

    const reset=()=>{
        setCounter(initialValue);
    };

    return{counter, increase, decrease, reset}
}

export default useCounter;