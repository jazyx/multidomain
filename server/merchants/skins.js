/**
 * /server/merchants/skins.js
 * 
 * This script reads the names of all the JSX files in the directory
 * whose path is hard-coded below, and generates a script in the same
 * directory called "merchant.js" to import the data exported by each
 * of these files. The merchant.js file then exports these data as an
 * object, to be imported by another script.
 */


 /// <<< HARD-CODED
 let directory = '../../imports/ui/components/skins/'
 let merchant = 'merchant.js'
 /// HARD-CODED >>>


 const fs = require('fs')
 const path = require('path')
 
 
 export default class SkinMerchant {
   constructor() {
    let script = this.getScriptChunk()
 
    directory = path.join(process.env.PWD, __dirname, directory)
    merchant = path.join(directory, merchant)

    const scripts = fs.readdirSync(directory)
    const exports = this.getExports(scripts)
    script += exports
    // script += chunks.names

    fs.writeFileSync(merchant, script)
  }
 
 
  getExports(scripts) {
    let exports = ""
    let extRegex = /\.jsx$/

    scripts.forEach( file => {
      const match = extRegex.test(file) // false for merchant.js

      if (match) {
       const name = file.replace(extRegex, "")
       exports += `
export ${name} from './${file}'`
      }
    })

    return exports
  }
 
 
   getScriptChunk() {
     return `/**
  * ** DO NOT EDIT THIS SCRIPT **
  * IT IS GENERATED AUTOMATICALLY
  * EACH TIME THE SERVER RESTARTS
  *
  * MODIFY THIS FILE INSTEAD:
  * /server/merchants/skins.js
  * **** **** **** **** **** ****
  *
  * This script gathers together details of all the <customDomain>.jsx
  * scripts found in this '/import/ui/components/skins/' folder.
  * 
  * The classes exported here are imported as 'skins ' by
  * '/imports/ui/components/Skin.jsx', which then exports the skin which
  * best matches the hostname of the website.
  */
 `
   }
 }
 

 new SkinMerchant()