import React, { Component } from 'react'

export default class PigCard extends Component {

  state = {
    clicked: false
  }


  displayImage = () => {
    const fileName = this.props.name.toLowerCase().replace(/\s/g, "_")
    return (
      <div className="image"><img src={require(`../hog-imgs/${fileName}.jpg`)} /></div>
    )
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  renderDescription = () => {
    return(
      <div className="description">
        <strong>Weight: </strong>{this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/>
        <strong>Highest Medal Achieved: </strong>{this.props['highest medal achieved']} <br/>
        <strong>Greased:</strong> {this.props.greased ? "Yes": "No"}

      </div>
    )
  }

  render() {
    console.log(this.state.clicked)
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
        <div className="ui card">
        {this.displayImage()}
          <div className="content">
            <a className="header">{this.props.name}</a>
       
              {this.state.clicked ? this.renderDescription():null }
           </div>
        </div>
      </div>
    )
  }

}