import React, {  useState,useEffect } from 'react';

function FunctionalTest(props){
    const [count, setCount ] = useState(0);
    useEffect(()=>{
        alert("mounted");
        return ()=>{
            alert("unmount");
        }

    },[props.title]);
    return (<div>
        <h1>{props.title}</h1>
<p>COUNT:{count}</p>
<button onClick={()=>setCount(count+1)}>click</button>
    </div>);
}
// class FunctionalTest extends React.Component{
//     state={
//         count:0
//     }
//     render(){
//         return (<div>
//             <p>COUNT:{this.state.count}</p>
//             <button onClick={()=>setState({count:this.state.count+2})}>click2</button>
//                 </div>);
//     }
// }
export default FunctionalTest;