import React,{Component} from 'react';

class Tweet extends Component {
    render() {
        return(
    <div className="tweet">      
     id = {this.props.id};
     <br/>
     {this.props.body}

        </div>
        );
    }
}
export default Tweet;