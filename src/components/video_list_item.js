import React from 'react';


const VIdeoListItem = ({video,onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                    </div>

                    <div className="media-body">
                        <div classname="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
        
        </li>
    );
};

export default VIdeoListItem;