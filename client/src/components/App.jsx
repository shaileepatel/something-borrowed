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
      allOutfits: [],
      outfitInfo: {}
    }
    this.onImgClick =  this.onImgClick.bind(this);
    this.outfitDetail =  this.outfitDetail.bind(this);
    this.goBackFromOutfits =  this.goBackFromOutfits.bind(this);
    this.goBackFromOutfitDetail =  this.goBackFromOutfitDetail.bind(this);
    this.selectFilter =  this.selectFilter.bind(this);
  }

  onImgClick(e, type) {
    if (!e.target.classList.contains('carousel__snapper')) return;
    axios.get("/api/outfits", {
      params: {
        type: type
      }
    })
      .then((res) => {
        this.setState({renderLandingPage: false, renderOutfitsPage: true, renderOutfitDetailPage: false, allOutfits: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  outfitDetail(id) {
    axios.get(`/api/outfits/${id}`)
      .then((res) => {
        this.setState({renderLandingPage: false, renderOutfitsPage: false, renderOutfitDetailPage: true, outfitInfo: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  goBackFromOutfits() {
    this.setState({renderLandingPage: true, renderOutfitsPage: false, renderOutfitDetailPage: false});
  }

  goBackFromOutfitDetail() {
    this.setState({renderLandingPage: false, renderOutfitsPage: true, renderOutfitDetailPage: false});
  }

  selectFilter(e) {
    axios.get("/api/outfits", {
      params: {
        [e.target.name]: e.target.value
      }
    })
      .then((res) => {
        this.setState({renderLandingPage: false, renderOutfitsPage: true, renderOutfitDetailPage: false, allOutfits: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (<div>
      <Header />
      {this.state.renderLandingPage ? <LandingPage onImgClick = {this.onImgClick}/> : null}
      {this.state.renderOutfitsPage ? <OutfitsPage allOutfits = {this.state.allOutfits} outfitDetail = {this.outfitDetail} goBackFromOutfits = {this.goBackFromOutfits} selectFilter = {this.selectFilter}/> : null}
      {this.state.renderOutfitDetailPage ? <OutfitDetailPage outfitInfo = {this.state.outfitInfo} goBackFromOutfitDetail = {this.goBackFromOutfitDetail}/> : null}
    </div>)
  }
}

export default App;