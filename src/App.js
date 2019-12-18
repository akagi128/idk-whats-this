import React,{Component} from 'react';
import Tweet from './tweet';
import Header from './header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    tweetArray : [
      {
      id: 1 , body: "Hey I m go"
    },
      {
        id: 2 , body: "Hey I a go"
      }
      ,
      {
        id: 3 , body: "Hey I u go"
      }
    ]
  }
}

  render(props) {
  return (
<div>
<Header />

  {
    this.state.tweetArray.map((tweet , index) => {
        return (
          <Tweet className="tweet" id={tweet.id} body={tweet.body} />
        )
    })
  }

</div>
   );
  }
}

export default App;
