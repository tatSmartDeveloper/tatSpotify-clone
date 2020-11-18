import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ title, Icon, id, uri }) {
  const [{ playlistUri }, dispatch] = useDataLayerValue();

  const setPlaylist = (e) => {
    dispatch({
      type: "SET_PLAYLISTURI",
      playlistUri: uri.split(":")[2],
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={setPlaylist}>{title}</p>}
    </div>
  );
}

export default SidebarOption;
