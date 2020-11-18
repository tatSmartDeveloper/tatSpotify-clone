export const initialState = {
  user: null,
  playlists: [],
  playlist: null,
  playlistUri: null,
  song: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_PLAYLISTURI":
      return {
        ...state,
        playlistUri: action.playlistUri,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };
    default:
      return state;
  }
};

export default reducer;
