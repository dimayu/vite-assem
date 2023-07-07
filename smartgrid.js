let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '32px',
    mobileFirst: false,
    container: {
        maxWidth: '1344px',
        fields: '48px'
    },
    breakPoints: {
        lm: {
            width: '1120px',
            fields: '48px'
        },
        md: {
            width: '940px',
            fields: '36px'
        },
        sm: {
            width: '768px',
            fields: '36px'
        },
        xxs: {
            width: '330px',
            fields: '20px'
        }
    }
};

smartgrid('./src/styles/helpers', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
