import * as Sentry from '@sentry/vue';

declare global {
  const murmur: string;
  interface Window {
    Sentry: typeof Sentry;
    _paq: any; // matomo
  }
}