import React from 'react';

const Footer = () => (
    <div id="footerwrap">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h4>About</h4>
                    <div className="hline-w" />
                    <p>
                        HeyNow is a Open Sourced alerting tool. Relatively simple, but powerful reactive engine and
                        easy to integrate API makes it a perfect choice for both simple and complex alerting rules.
                    </p>
                </div>
                <div className="col-lg-4">
                    <h4>Documentation and Support</h4>
                    <div className="hline-w" />
                    <ul>
                        <li>
                            <a href="https://heynow-io.github.io/">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://heynow-io.slack.com/messages">
                                Slack Channel
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/heynow-io">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h4>Ocado Technology</h4>
                    <div className="hline-w" />
                    <p>
                        HeyNow is developed and maintained by <a href="http://www.ocadotechnology.com/">Ocado
                        Technology</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
