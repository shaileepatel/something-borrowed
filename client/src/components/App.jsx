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
      renderOutfitsPage: false,
      renderOutfitDetailPage: false
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>Something Borrowed</h1>
      {this.state.renderLandingPage ? <LandingPage /> : null}
      {this.state.renderOutfitsPage ? <OutfitsPage /> : null}
      {this.state.renderOutfitDetailPage ? <OutfitDetailPage /> : null}
    </div>)
  }
}

export default App;
