const removedFromSimpleIcons: Record<string, string> = {
  slack: '4A154B'
}

export function getBrandIconUrl(slug: string): string {
  const color = removedFromSimpleIcons[slug]
  if (color) {
    return `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${color}`
  }
  return `https://cdn.simpleicons.org/${slug}`
}
