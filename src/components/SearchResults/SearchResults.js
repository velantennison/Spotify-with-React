import React from 'react';
import "../Tracklist/Tracklist.css";
import'./SearchResults.css';

import TrackList from "../Tracklist/Tracklist";

class SearchResults extends React.Component{
    render() {
        return(
        <div className="searchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd}></TrackList>
        </div>
        );
    }
}

export default SearchResults;