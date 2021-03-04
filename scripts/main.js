// import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }
// Import the FishList here
FishList()

import { useTips } from './tips/TipsDataProvider.js'
import { TipsList } from './tips/TipsList.js'

const allTheTips = useTips()

for (const tips of allTheTips) {
     console.log(tips)
}
// Import the FishList here
TipsList()

import { useLocation } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'

const allTheLocations = useLocation()

for (const location of allTheLocations) {
    console.log(location)
}

LocationList()






