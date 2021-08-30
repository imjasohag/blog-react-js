import React from 'react'


export default function Card({ photo, ottPlatform, seriesName, watchLink }) {
    return (
        <div className="card">
            <img className="poster"src={photo} alt="poster" />
            <p className="seriesname">{seriesName}</p>
            <h3 className="ott">{ottPlatform}</h3>
            <a className="watchlink"href={watchLink} rel="noreferrer" target="_blank">Watch Now</a>
        </div>
    )
}
