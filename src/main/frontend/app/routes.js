import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import StreamsIndex from './components/streams/StreamsIndex';
import StreamsShow from './components/streams/StreamsShow';
import NewStream from './components/streams/NewStream';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/streams" component={StreamsIndex}>
            <Route path="/streams/:id" component={StreamsShow} />
        </Route>
        <Route path="/new-stream" component={NewStream} />
    </Route>
);
