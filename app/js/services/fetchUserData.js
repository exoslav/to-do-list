export const getUserData = () => {
  if (typeof window === 'undefined' || typeof window.localStorage !== 'undefined') {
    if (window.localStorage.user) {
      return JSON.parse(window.localStorage.user)
    }

    window.localStorage.usesr = JSON.stringify({})

    return {}
  }

  return {}
}
