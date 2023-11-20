import {GovernmentBuildingType, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingType>) => {
  return governmentBuildings.map(g => g.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
  let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`;
  let newArray = houses.map(callbackfn);
  return newArray
}