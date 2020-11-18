import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track }) {
  const [{ song }, dispatch] = useDataLayerValue();

  const setSong = () => {
    dispatch({
      type: "SET_SONG",
      song: track,
    });
  };

  console.log("🔥", song);

  return (
    <div className="songRow" onClick={setSong}>
      <img
        className="songRow__album"
        src={track.album.images[0].url}
        alt="Track Image"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name ? " - " : ""}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
