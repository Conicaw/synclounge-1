export default {
  getItemCache: (state) => state.itemCache,
  getLibraryCache: (state) => state.libraryCache,
  recentClients: (state) => {
    let clients = [];
    for (const client in state.clients) clients.push(state.clients[client]);
    clients = clients.sort((a, b) => parseInt(b.lastSeenAt) - parseInt(a.lastSeenAt));
    return clients;
  },
  GET_LASTSERVER: (state, getters) => state.servers[getters['settings/GET_LASTSERVER']],
  GET_VALID_SERVERS: (state) => Object.fromEntries(
    Object.entries(state.servers).filter(
      ([, server]) => server.chosenConnection,
    ),
  ),
};
