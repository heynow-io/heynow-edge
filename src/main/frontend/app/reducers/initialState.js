export default {
    streams: [],
    title: 'Home',
    operators: {
        sink: [
            {
                name: 'email-sink',
                displayName: 'Email',
                properties: [
                    { name: 'recipient', description: 'Recipient email address' },
                    { name: 'subject', description: 'Email subject' },
                ],
            },
        ],
        processor: [
            {
                name: 'filter-operator',
                displayName: 'Filter',
                properties: [
                    { name: 'script', description: 'Groovy script that will filter events' },
                ],
            },
        ],
    },
};
