import React, { Component } from 'react';

class Like extends Component {

    render() { 
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o"
        return (<li onClick={this.props.onClick} style={{cursor:"pointer"}} className={classes}aria-hidden="true"></li>  );
    }
}
 
export default Like;