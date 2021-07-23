import React from 'react';
import "./Tracklist.css";

import Track from "../Track/Track";

class TrackList extends React.Component{
    constructor(props) {
        super(props);
          this.state = {
             tracks: []
          };
      }
    render() {

        return(
        <div>
            {this.state.tracks.map(track => {
                return(
                    <Track 
                    track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}
                    isRemoval={this.props.isRemoval}
                    onRemove={this.props.onRemove} />

                    // </Track>
                );
            })}
        </div>
        );
    }
}

export default TrackList;