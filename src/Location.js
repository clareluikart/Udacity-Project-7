import React from 'react';

export default class Location extends React.Component {

  constructor(){
    super()
    this.onClick = this.onClick.bind(this);
  }//https://stackoverflow.com/questions/49166453/react-redux-cannot-access-props-from-method-in-onclick

  state = {
    tip: ""
  }

  // handleSuccess = (asyncRequestObject) => {
  //   console.log("here")
  //   const data = JSON.stringify(asyncRequestObject.responseText);
  //   console.log(asyncRequestObject.responseText)
  //   if (data && data.response && data.response.tips[0]) {
  //     this.setState({tip:data.response.tips[0]})
  //   }
  // }
  //
  // handleError = () => {
  //   console.log("error")
  // }
  //
  // onClick(handleSuccess, handleError){
  //   const tipRequest = new XMLHttpRequest();
  //   tipRequest.open('GET', 'https://api.foursquare.com/v2/venues/4b3fcf3cf964a52058af25e3/tips?ll=40.7,-74&client_id=VGEMHGZTZXNI10D41HUYCXJSU5WYXMVZM3HJMKYAROUGVPFJ&client_secret=CNU0ZBMOLRZP0D422CTHFVZVJ0ZNDPYSNAPOTHZS3P0MIKQR&v=20181101');
  //   tipRequest.onload = handleSuccess(tipRequest);
  //   tipRequest.onerror = handleError;
  //   tipRequest.send();
  // }
  onClick(){
    this.props.startMarkerAnimation(this.props.location.name);
    // fetch('https://api.foursquare.com/v2/venues/'+this.props.location.foursquareID+'/tips?ll=40.7,-74&client_id=VGEMHGZTZXNI10D41HUYCXJSU5WYXMVZM3HJMKYAROUGVPFJ&client_secret=CNU0ZBMOLRZP0D422CTHFVZVJ0ZNDPYSNAPOTHZS3P0MIKQR&v=20181101')
    // .then(response => response.json()).then(data => console.log(data.response.tips.items[0].text))
    // .catch(function(error){
    //     console.log(error);
    // });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>{this.props.location.name}</button>
        <p>{this.state.tip}</p>
      </div>
    );
  }
}
