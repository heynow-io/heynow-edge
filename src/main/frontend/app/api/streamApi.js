class StreamApi {
    static getAllStreams() {
        return fetch('stream-manager/streams')
            .then(response => response.json())
            .catch(error => error);
    }
}

export default StreamApi;
