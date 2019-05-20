import React, { Component } from 'react'
import FilterForm from './FilterForm'
import PiggyContainer from './PiggyContainer';

export default class MainContainer extends Component {

    state = {
        sortBy: "none",
        filterBy: "none"
    }

    handleFormSubmit = (edwin) => { 
        edwin.preventDefault()
        this.setState({
            sortBy: edwin.target[0].value,
            filterBy: edwin.target[1].value
        })
    }

    updateFilter = (e) => {

    }

    getHogsViaState = () => {

    }

    updateSort = () => {
      
    }

  render() {
    return (
      <div>
        <FilterForm onFormSubmit={this.handleFormSubmit} onSortChange={this.updateSort} onFilterChange={this.updateFilter} />
        {/* {this.state.sortBy}
        {this.state.filterBy}
        {this.props.hogs.join("  ")} */}
        <PiggyContainer hogs={this.props.hogs} filter={this.state.filterBy} sort={this.state.sortBy}/>
        
      </div>
    )
  }
}
