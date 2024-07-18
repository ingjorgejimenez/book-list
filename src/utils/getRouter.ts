export const getCurrentPath = () => window.location.pathname
export const getSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search)
  return searchParams
}
