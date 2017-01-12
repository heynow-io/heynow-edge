export const dirs = {
    SOURCE: 'app',
    BUILD: '../../../target/classes/static',
    IMAGES: 'images',
    STYLES: 'styles',
};

export const page = {
    FAVICON: `${dirs.IMAGES}/favicon.ico`,
    TITLE: 'heynow-edge',
};

export const server = {
    HOST: 'localhost',
    PORT: 9091,
};

export const DEV_PROXY = {
    '/stream-manager': {
        target: 'http://104.197.200.159:80',
        secure: false,
        prependPath: false,
    },
};
