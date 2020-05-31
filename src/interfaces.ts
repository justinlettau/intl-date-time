/**
 * Configuration.
 */
export interface Config {
  locale?: string | undefined;
  timeZone?: string | undefined;
}

/**
 * Named formats.
 */
export type NamedFormat =
  | 'short'
  | 'medium'
  | 'long'
  | 'full'
  | 'shortDate'
  | 'mediumDate'
  | 'longDate'
  | 'fullDate'
  | 'shortTime'
  | 'mediumTime'
  | 'longTime';
