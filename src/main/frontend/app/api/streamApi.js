class StreamApi {
    static getAllStreams() {
        return fetch('api/stream-manager/streams')
            .then(response => response.json())
            .catch(error => error);
    }
}

export default StreamApi;
