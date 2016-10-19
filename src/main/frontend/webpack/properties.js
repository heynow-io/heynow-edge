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
    '/': {
        target: 'http://localhost:8081',
        secure: false,
        prependPath: false,
    },
};
