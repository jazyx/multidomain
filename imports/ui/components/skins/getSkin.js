import skins from './merchant'

const domainName = window.location.hostname.toLowerCase()

const skin = skins[domainName] || skins.stopgap

export default skin