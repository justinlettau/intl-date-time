import { Config, NamedFormat } from './interfaces';

/**
 * Global configuration.
 */
export const config: Config = {};

/**
 * Format a date with the default locale.
 *
 * @param date Source date.
 * @param format Named format.
 */
export function format(date: Date, format: NamedFormat) {
  const options = getOptions(format);
  let locale: string | undefined;

  if (config.locale) {
    locale = config.locale;
  }

  if (config.timeZone) {
    options.timeZone = config.timeZone;
  }

  return date.toLocaleString(locale, options);
}

/**
 * Get `Intl.DateTimeFormatOptions` object based on name.
 *
 * @param format Named format.
 */
export function getOptions(format: NamedFormat) {
  let options: Intl.DateTimeFormatOptions | undefined;

  switch (format) {
    case 'short':
      options = {
        day: 'numeric',
        month: '2-digit',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
      };
      break;
    case 'medium':
      options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      break;
    case 'long':
      options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };
      break;
    case 'full':
      options = {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };
      break;
    case 'shortDate':
      options = {
        day: 'numeric',
        month: '2-digit',
        year: '2-digit',
      };
      break;
    case 'mediumDate':
      options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
      break;
    case 'longDate':
      options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      break;
    case 'fullDate':
      options = {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric',
      };
      break;
    case 'shortTime':
      options = {
        hour: 'numeric',
        minute: 'numeric',
      };
      break;
    case 'mediumTime':
      options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      break;
    case 'longTime':
      options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };
      break;
  }

  return options;
}
