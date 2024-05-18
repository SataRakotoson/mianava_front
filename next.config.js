
const withImages = require('next-images');

module.exports = withImages({
    images: {
      disableStaticImages: true,
    },
    // basePath: process.env.NODE_ENV === 'production' ? `/react/molla/demo-${process.env.NEXT_PUBLIC_DEMO}` : '',
    basePath: process.env.NODE_ENV === 'production' ? `https://mianava-front.vercel.app` : '',
    trailingSlash: true,
    env: {
        // PUBLIC_URL: process.env.NODE_ENV === 'production' ? `/react/molla/demo-${process.env.NEXT_PUBLIC_DEMO}/` : '/',
        PUBLIC_URL: process.env.NODE_ENV === 'production' ? `https://mianava-front.vercel.app/` : '/',
        // APP_URL: process.env.NODE_ENV === 'production' ? 'https://d-themes.com/react/molla/' : 'http://localhost/'
        APP_URL: process.env.NODE_ENV === 'production' ? 'https://mianava-front.vercel.app' : 'http://localhost/'
    }
})

