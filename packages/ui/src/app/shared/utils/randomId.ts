// TODO: We'll want to make this slightly more robust

export function randomId(
  len: number = 5,
  chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
): string {
  return Array.apply(0, Array(len))
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('');
}
