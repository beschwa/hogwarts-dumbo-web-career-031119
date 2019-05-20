import React from 'react'

export default function FilterForm(props) {

  return (
    <div>
      <form onSubmit={props.onFormSubmit}>
          {/* <h4>Sorting Options:</h4>
            <input type="radio" name="sortBy" value="weight"/>Weight
            <input type="radio" name="sortBy" value ="none"/>None
            <input type="radio" name="sortBy" value ="name"/>Name
          <h4>Filter Options:</h4>
            <input type="radio" name="filterBy" value="greased"/>Greased
            <input type="radio" name="filterBy" value="ungreased"/>Ungreased
            <input type="radio" name="filterBy" value="none"/>None
            <button type="submit">Submit</button> */}
            Sorting:
            <select onChange={props.onSortChange}>
              <option name="sortBy" value="name">Name</option>
              <option name="sortBy" value="weight">Weight</option>
              <option name="sortBy" value="none">None</option>
            </select>
            Filtering:
            <select onChange={props.onFilterChange}>
              <option name="filterBy" value="greased">Greased</option>
              <option name="filterBy" value="ungreased">Ungreased</option>
              <option name="filterBy" value="none">None</option>
            </select>
            <button type="submit">Filter/Sort!</button>
      </form>
      <br/>
    </div>
  )
}

