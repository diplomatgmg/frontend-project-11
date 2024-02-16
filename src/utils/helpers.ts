const isValidUrl = (url: string): boolean => {
  const pattern = /(https?:\/\/|www\.)\S+/gi
  return pattern.test(url)
}

export { isValidUrl }
