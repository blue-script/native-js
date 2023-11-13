import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

// подход фнункционально программирования
export const sum = (a: number, b: number) => {
  debugger
  return a + b
}

export function sum2(a: number, b: number) {
  debugger
  return a + b
}

const res = sum(sum(1, 2), sum(3, 4))

// ООП подход
export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function addSkill2(st: StudentType, skill: string) {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export function doesStudentLiveIn(stud: StudentType, city: string) {
  return stud.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingType, buget: number)=>{
  building.budget += buget
}
export const repairHouse = (house: HouseType)=>{
  house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
  building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, staffCountToHire: number) {
  building.staffCount += staffCountToHire;
}

export const createMessage = (props: CityType) => {
  return `Hello ${props.title} citizen`
}