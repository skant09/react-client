import bugsnag from 'bugsnag-js';
import { appVersion, bugsnagKey } from './env';

export const bugsnagClient = bugsnag({
  apiKey: bugsnagKey,
  appVersion,
  notifyReleaseStages: ['production']
});
