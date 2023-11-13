import {CityType, GovernmentBuildingType} from '../02/02_02';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<GovernmentBuildingType>, staff: number) {
  return governmentBuildings.filter(g=> g.staffCount > 500)
}