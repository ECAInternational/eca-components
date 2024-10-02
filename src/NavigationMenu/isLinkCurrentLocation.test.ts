import { describe, expect, it } from 'vitest';
import isLinkCurrentLocation from './isLinkCurrentLocation.ts';

describe('isLinkCurrentLocation', () => {
  it('returns false if either link or currentLocation is undefined', () => {
    expect(isLinkCurrentLocation(undefined, '/some/path')).toBe(false);
    expect(isLinkCurrentLocation('/some/path', undefined)).toBe(false);
    expect(isLinkCurrentLocation(undefined, undefined)).toBe(false);
  });

  it('returns true when link and currentLocation have the same pathname', () => {
    const link = 'http://example.com/some/path';
    const currentLocation = 'http://example.com/some/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(true);
  });

  it('returns false when link and currentLocation have different pathnames', () => {
    const link = 'http://example.com/some/path';
    const currentLocation = 'http://example.com/another/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(false);
  });

  it('ignores differences in query parameters and hash fragments', () => {
    const link = 'http://example.com/some/path?query=123#section';
    const currentLocation = 'http://example.com/some/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(true);
  });

  it('returns true for relative paths that match', () => {
    const link = '/some/path';
    const currentLocation = '/some/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(true);
  });

  it('returns false when comparing different relative paths', () => {
    const link = '/some/path';
    const currentLocation = '/another/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(false);
  });

  it('handles trailing slashes correctly', () => {
    const link = 'http://example.com/some/path/';
    const currentLocation = 'http://example.com/some/path';

    expect(isLinkCurrentLocation(link, currentLocation)).toBe(true);
  });
});
