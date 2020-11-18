import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      {playlist ? (
        <div className="body__info">
          <img src={playlist?.images[0].url} alt="Banner Image" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>{playlist?.name}</h2>
            <p>{playlist?.description}</p>
          </div>
        </div>
      ) : (
        <div className="body__info">
          <div className="body__infoText">
            <strong></strong>
            <h2>Select a Playlist</h2>
            <p></p>
          </div>
        </div>
      )}

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {playlist?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
