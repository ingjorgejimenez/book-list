export const getCurrentPath = () => {
  const path = window.location.pathname
  const hash = window.location.hash
  const hashNotSearchParams = hash.split('?')[0]
  return path + hashNotSearchParams
}
export const getSearchParams = () => {
  // Search parameters window.location.search
  const fullHash = window.location.hash
  const queryString = fullHash.split('?')[1]
  const searchParams = new URLSearchParams(queryString)
  return searchParams
}
