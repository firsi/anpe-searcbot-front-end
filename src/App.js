import React from 'react';
import './App.css';
import Naviguation from './Naviguation.js'
import Disclaimer from './Disclaimer.js';
import OffersDisplay from './OffersDisplay';
import Axios from 'axios';
import Loader from './Loader';
const URL = "http://localhost:4000/api/offres";

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

    this.state={
      offresArr:"",
      isLoading: true
    }
  }

  componentDidMount(){
    
    Axios.get(URL)
    .then((response) => {
      console.log(response.status)
      if(response.status === 200){
        this.setState({
          offresArr: response.data.offres,
          isLoading: false
        });
        console.log(this.state.offresArr);
      }
    },(error) => console.log(error));
  }
  render() {
    return <div >
        <header>
          <Naviguation />
        </header>

        <main className="container-fluid">
            <Disclaimer />
            {this.state.isLoading? <Loader loading={this.state.isLoading}/> : <OffersDisplay offresArr={this.state.offresArr}/>}
        </main>
        <footer className="text-center">
          <div className="container">
            <span className="copyright">@2019 ANPEsearchBot, All Rights Reserved</span>
          </div>
        </footer>
    </div>
  }
}

export default App;
