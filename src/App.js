import React,{Component} from 'react';
import Tweet from './tweet';
import Header from './header';
import './App.css';

class App extends Component {
  
  render(props) {
  return (
    
<div>
<Header />
<Tweet name="John" />
<Tweet name="John" />
<Tweet name="John" />
</div>
   );
  }
}

export default App;
