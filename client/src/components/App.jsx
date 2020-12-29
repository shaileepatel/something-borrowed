import React from 'react';
import Header from './Header.jsx';
import LandingPage from './LandingPage/index.jsx';
import OutfitsPage from './OutfitsPage/index.jsx';
import OutfitDetailPage from './OutfitDetailPage/index.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderLandingPage: true,
      renderOutfitsPage: false,
      renderOutfitDetailPage: false,
      allOutfits: []
    }
    this.onImgClick =  this.onImgClick.bind(this);
  }

  onImgClick(e) {
    if (!e.target.classList.contains('carousel__snapper')) return;
    this.setState({renderLandingPage: false, renderOutfitsPage: true, renderOutfitDetailPage: false})
  }

  componentDidMount() {
    axios.get("/api/outfits", {
      params: {
        type: 'saree'
      }
    })
      .then((res) => {
        console.log(res.data);
        this.setState({allOutfits: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (<div>
      <Header />
      {this.state.renderLandingPage ? <LandingPage onImgClick = {this.onImgClick}/> : null}
      {this.state.renderOutfitsPage ? <OutfitsPage allOutfits = {this.state.allOutfits}/> : null}
      {this.state.renderOutfitDetailPage ? <OutfitDetailPage /> : null}
    </div>)
  }
}

export default App;