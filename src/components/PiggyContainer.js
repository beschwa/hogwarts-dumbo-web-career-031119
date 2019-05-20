import React, { Component } from 'react'
import FilterForm from './FilterForm'
import PigCard from './PigCard'


export default class PiggyContainer extends Component {


    sortAndFilterBy = (sortByValue, filterByValue) => {
        let tempHogs = []
        if (filterByValue === 'greased' ){
           tempHogs = this.props.hogs.filter(hog => {
                return hog.greased === true
            })
        } else if (filterByValue === 'ungreased') {
            tempHogs = this.props.hogs.filter(hog => {
                return hog.greased === false
            })
        } else {
            tempHogs = this.props.hogs
        }
        if (sortByValue === 'name') {
        return tempHogs.sort(function(a, b){
                if (a.name < b.name) //sort string ascending
                    return -1 
                if (a.name > b.name)
                    return 1
                return 0 //default return value (no sorting)
            })
        } else if (sortByValue === 'weight') {
            return tempHogs.sort(function(a, b){
                if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) //sort string ascending
                    return -1 
                if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
                    return 1
                return 0 //default return value (no sorting)
              })
        } else {
            return tempHogs
        }
    }


    renderHogs = () => {
        const hogs = this.sortAndFilterBy(this.props.sort, this.props.filter)

        return hogs.map(hog =>{
            return <PigCard {...hog}/>
        })
    }


    render(){
        return(
            <div className="ui grid container">
                {this.renderHogs()}
            </div>
        )
    }

    
}
