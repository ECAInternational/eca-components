const isLinkCurrentLocation = (link?: string, currentLocation?: string) => {
  if (!link || !currentLocation) return false;

  const normalizePathname = (url: string) => new URL(url, 'http://placeholder.com').pathname.replace(/\/$/, '');

  return normalizePathname(link) === normalizePathname(currentLocation);
};

export default isLinkCurrentLocation;
