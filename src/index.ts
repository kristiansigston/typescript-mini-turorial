import { User } from './classes/user'
import { Company } from './classes/company'

// do not commit api key has been added to index.html
// for googlemaps that is

import { CustomMap } from './classes/customMap'

const createMap = () => {
  const customMap = new CustomMap('map')
  const user = new User()
  const company = new Company()

  customMap.addMarker(user)
  customMap.addMarker(company)

}

setTimeout(createMap, 1000)
