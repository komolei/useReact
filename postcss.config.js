module.exports = {
    plugins: [
        require('autoprefixer')({
            cascade: false,
            add: true,
            remove: false,
            supports: true,
            flexbox: true,
            grid: false,
            // stats: {
            //     "ie": {
            //         "6": 0.01,
            //         "7": 0.4,
            //         "8": 1.5
            //     },
            //     "chrome": {
            //     },
            // },
            browsers: ['last 0 version'],
        })
    ]
}