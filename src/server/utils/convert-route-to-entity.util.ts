const mapping: Record<string, string> = {
  clients: 'client',
  comments: 'comment',
  follows: 'follow',
  likes: 'like',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
