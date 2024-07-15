const clientId = "8a4adfcf553945e4aeeaa23c1786606f";
const redirectUri = "http://localhost:3000/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const accessToken = this.getAccessToken();
    const respone = await fetch(
      `https://api.spotify.com/v1/search?type=track&limit=5&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const jsonResponse = await respone.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      album: track.album.name,
      artist: track.artists[0].name,
      uri: track.uri,
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    const userIdResponse = await fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    });
    const jsonUserIdResponse = await userIdResponse.json();

    userId = jsonUserIdResponse.id;

    const playlistIdResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: name }),
      }
    );
    //console.log(playlistIdResponse)
    const jsonPlaylistIdResponse = await playlistIdResponse.json();
    const playlistId = jsonPlaylistIdResponse.id;
    console.log(jsonPlaylistIdResponse.id);

    await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      }
    );
  },
};

export default Spotify;
