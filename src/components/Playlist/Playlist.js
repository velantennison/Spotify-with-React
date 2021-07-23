import React from 'react';
import "./Playlist.css";

import TrackList from "../Tracklist/Tracklist";

class PlayList extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render() {
        return(
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={'New Playlist'}></input>
            <TrackList track={this.props.PlayListTracks}
            isRemoval={true} 
            onRemove={this.props.onRemove}></TrackList>
            <button className="Playlist-save" onClick={this.props.onSave}> save to spotify</button>
        </div>
        )
    }
}

export default PlayList;