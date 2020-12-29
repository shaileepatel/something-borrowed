import React from 'react';
import LandingPage from './LandingPage/index.jsx';
import OutfitsPage from './OutfitsPage/index.jsx';
import OutfitDetailPage from './OutfitDetailPage/index.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderLandingPage: true,
      renderOutfitsPage: true,
      renderOutfitDetailPage: true
    }
    this.onImgClick =  this.onImgClick.bind(this);
  }

  onImgClick(e) {
    if (!e.target.classList.contains('carousel__snapper')) return;
    this.setState({renderOutfitsPage: false, renderOutfitDetailPage: false})
  }

  // componentDidMount() {}

  render () {
    return (<div>
      <h1>Something Borrowed</h1>
      {this.state.renderLandingPage ? <LandingPage onImgClick = {this.onImgClick}/> : null}
      {this.state.renderOutfitsPage ? <OutfitsPage /> : null}
      {this.state.renderOutfitDetailPage ? <OutfitDetailPage /> : null}
    </div>)
  }
}

export default App;
