import { format, config } from '.';

describe('IntlDateTime', () => {
  let date: Date;

  beforeEach(() => {
    config.timeZone = 'America/New_York';
    date = new Date('2020-08-01T18:32:21Z');
  });

  describe('short method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'short');

      expect(result).toBe('08/1/20, 2:32 PM');
    });
  });

  describe('medium method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'medium');

      expect(result).toBe('Aug 1, 2020, 2:32:21 PM');
    });
  });

  describe('long method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'long');

      expect(result).toBe('August 1, 2020, 2:32:21 PM EDT');
    });
  });

  describe('full method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'full');

      expect(result).toBe('Saturday, August 1, 2020, 2:32:21 PM EDT');
    });
  });

  describe('shortDate method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'shortDate');

      expect(result).toBe('08/1/20');
    });
  });

  describe('mediumDate method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'mediumDate');

      expect(result).toBe('Aug 1, 2020');
    });
  });

  describe('longDate method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'longDate');

      expect(result).toBe('August 1, 2020');
    });
  });

  describe('fullDate method', () => {
    test('should return formatted date', () => {
      const result = format(date, 'fullDate');

      expect(result).toBe('Saturday, August 1, 2020');
    });
  });

  describe('shortTime method', () => {
    test('should return formatted time', () => {
      const result = format(date, 'shortTime');

      expect(result).toBe('2:32 PM');
    });
  });

  describe('mediumTime method', () => {
    test('should return formatted time', () => {
      const result = format(date, 'mediumTime');

      expect(result).toBe('2:32:21 PM');
    });
  });

  describe('longTime method', () => {
    test('should return formatted time', () => {
      const result = format(date, 'longTime');

      expect(result).toBe('2:32:21 PM EDT');
    });
  });
});
