const React = require('react');

class Bomb extends React.Component{
  constructor(props) {
    super(props)
      this.state = {
        secondsLeft: this.props.initialCount
      };
  }



  render(){
    let time = this.state.secondsLeft
    if(time > 0){
      return(
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }else{
      return(
        <div>Boom!</div>)

    }
  }
}

module.exports = Bomb;
