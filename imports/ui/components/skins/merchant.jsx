/** DO NOT EDIT THIS SCRIPT **
* IT IS GENERATED AUTOMATICALLY
* EACH TIME THE SERVER RESTARTS
*
* MODIFY THIS FILE INSTEAD:
* /server/merchants/skins.js
* **** **** **** **** **** ****
*
* This script gathers together details of all the <ActivityName>.jsx
* scripts found in the '/public/activities/<ActivityName>/' folders.
* JSX scripts which do not have the same name as the folder itself
* will be ignored. They can still be used as secondary views by other
* activity components.
*
* The classes exported here are imported as 'views' by
* '/imports/ui/App.jsx'
*/


import stopgap  from './stopgap'
import localhost from './localhost'
import meteor1 from './meteor1'
import meteor2 from './meteor2'

const skins = {
  stopgap
, localhost
, meteor1
, meteor2
}

console.log("skins:", skins)

export default skins