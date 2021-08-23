import skins from './skins/merchant'

let domain = window.location.hostname.toLowerCase()

// Check for full match
let skin = skins[domain]

if (!skin) {
  // Try by subdomains and then the registered domain
  domain = domain.split(".")

  domain.every( label => {
    if (skin = skins[label]) {
      return false
    }

    return true
  })
}

if (!skin) {
  // No match for the domain name was found
  skin = skins.stopgap
}

export default skin