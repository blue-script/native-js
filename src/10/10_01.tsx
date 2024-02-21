import {CompaniesType} from './10_01.test';

export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house?: number
  }
}
export type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}
export type UserWithBooksType = UserType & {
  books: Array<string>
}
export type WithCompaniesType = UserType & {
  companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
  const copy = {...u, hair: u.hair / power}
  return copy
}

export function moveUser(user: UserWithLaptopType, city: string) {
  return {...user, address: {...user.address, title: city}}
}

export function upgradeUserLaptop(user: UserWithLaptopType, brand: string) {
  return {...user, laptop: {...user.laptop, title: brand}}
}

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
  return {...user, address: {...user.address, house: house}}
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
  return {...user, books: user.books.concat(newBooks)}
}

export const addNewCompany = (user: UserWithLaptopType & WithCompaniesType, company: { id: number, title: string }) => (
  {...user, companies: [...user.companies, company]}
)
export const updateCompany = (user: WithCompaniesType, id: number, newTitle: string) => (
  {
    ...user, companies: user.companies.map(c => c.id === id
      ? {...c, title: newTitle}
      : c)
  }
)
export const updateCompanyTitle = (companies: CompaniesType,
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {
  let companyCopy = {
    ...companies,
    [userName]: companies[userName].map(
      obj => obj.id === companyId
      ? {...obj, title: newTitle}
      : obj
    )
  }
  return companyCopy
}

