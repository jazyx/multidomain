import skins from './skins/merchant'


let domain = window.location.hostname.toLowerCase()
// <<< Treat raw IP addresses //  Treat raw IP addresses <<<
//
// A domain with the format XXX.XXX.XXX.XXX (where XXX is any
// number between 0 and 255), needs to be converted to the 
// string "xXXX_XXX_XXX_XXX", in order to be found in skins
const IPRegEx = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/
const match = IPRegEx.exec(domain)
if (match) {
  // Try for an exact match with this IP address
  domain = "x" + match.slice(1).join("_")

  if (!skins[domain]) {
    // Use a mask for any address in the XXX.XXX.XXX.zzz range
    domain = "x" + match.slice(1,4).join("_")

    if (!skins[domain]) {
      // Use a mask for any address in the XXX.XXX.zzz.zzz range
      domain = "x" + match.slice(1,3).join("_")
    }
  }
}
// >>> Treat raw IP addresses >>>

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