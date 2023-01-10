export const secondsToHMS = (seconds: number): string => {
  if (seconds < 3600) {
    return new Date(seconds * 1000).toISOString().slice(11, 19).replace('00:', '')
  } else {
    return new Date(seconds * 1000).toISOString().slice(11, 19)
  }
}