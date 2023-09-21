'use-strict';

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_TRACES_SAMPLE_RATE = process.env.SENTRY_TRACES_SAMPLE_RATE;

function start() {
    if (SENTRY_DSN != '') {
        const sentry = require('@sentry/node');
        const { CaptureConsole } = require('@sentry/integrations');
        console.log('Sentry monitoring started...');
        sentry.init({
            dsn: SENTRY_DSN,
            integrations: [
                new CaptureConsole({
                    levels: ['warn', 'error'],
                }),
            ],
            tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
        });
        // console.error('TEST error message');
        // console.warn('TEST warn message');
    }
}

module.exports = {
    start,
};
