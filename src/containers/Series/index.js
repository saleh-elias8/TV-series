import React, { Component } from "react";
import Intro from "../../components/Intro";
import SeriesList from "../SeriesList";
import Loader from "../../components/Loader";

class Series extends Component{
    state = {
        series:[],
        seriesName:'',
        isFetching: false,

      }

      onSeriesInputChange = e => {
        this.setState({ seriesName:e.target.value, isFetching:true});
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json,isFetching:false}));

      }
    render(){
        const{series,seriesName,isFetching} = this.state;
        return(
            <div>
                <Intro message= "Here you can find all your most loved series"/>
                {this.state.series.length}
                <div>
                    <input value={seriesName} type='text' onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No Tv series have been found with this Name</p>
                }
                {
                    isFetching && <Loader/>
                }
                <SeriesList list={this.state.series}/>
                
            </div>
        );
    }
}

export default Series;