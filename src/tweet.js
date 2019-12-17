import React,{Component} from 'react';

class Tweet extends Component {

    state = {
        name: 'John',
        keynards: 'Mac'
      }


    render() {
        return(
    <div className="tweet">
    <button className="red" onClick={() => this.setState({name:'Hey'})}>Change</button>
    <h3>{this.state.name}</h3>
    <p>{this.state.keynards}</p>
    <h3>Likes</h3>
        </div>
        );
    }
}
export default Tweet;