import React from 'react'

function add(a,b){
    let c=a+b;
    return c;
};

function sub(a,b){
    let c=a-b;
    return(c);
};

function mul(a,b){
    let c=a*b;
    return(c);
};

function div(a,b){
    let c=a/b;
    return(c.toFixed(2));
};
function Calculator(){
    return(
        <ul>
            <li>{add(5,4)}</li>
            <li>{sub(5,4)}</li>
            <li>{mul(5,4)}</li>
            <li>{div(5,4)}</li>
       </ul>
    );
}

export default Calculator;

