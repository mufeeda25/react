import React from 'react';
class List extends React.Component{
    state={
        names:[
            "user1",
            "user2",
            "user3",
            "user4",
            "user5",
            "user6", 
            "user7"
        ]
    }
    render(){
        return (<div>
            {
                this.state.names.map(name=>{
                return <div key={name}>{name}</div>;
                })
            }
        </div>)
    }
}
export default List;