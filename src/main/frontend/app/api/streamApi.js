class StreamApi {
    static getAllStreams() {
        return fetch('/stream-manager/streams')
            .then(response => response.json())
            .catch(error => error);
    }

    static addStream(stream) {
        return fetch('/stream-manager/streams', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stream),
        })
            .then(response => response.json())
            .catch(error => error);
    }
}

export default StreamApi;
