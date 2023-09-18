import React, {Component} from "react";

class SingleSeries extends Component{
    render() {
        console.log(this.props);
        return(
            <div>
                <p>SingleSeries - the show id will be {this.props.match.params.id}</p>
            </div>
        );
    }
} 

export default SingleSeries;