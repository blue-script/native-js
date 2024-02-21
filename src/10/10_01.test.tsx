import {
  addNewBooksToUser, addNewCompany,
  moveUser,
  moveUserToOtherHouse, updateCompany, updateCompanyTitle,
  upgradeUserLaptop,
  UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from './10_01';

test('reference type test', () => {
  let user: UserWithLaptopType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'}
  }

  const movedUser = moveUser(user, 'Kiev')


  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.title).toBe('Kiev')
})

test('upgrade laptop to mackbook', () => {
  let user: UserWithLaptopType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'}
  }

  const editLaptop = upgradeUserLaptop(user, 'Mackbook')

  expect(user).not.toBe(editLaptop)
  expect(user.address).toBe(editLaptop.address)
  expect(user.laptop).not.toBe(editLaptop.laptop)
  expect(user.laptop.title).toBe('ZenBook')
  expect(editLaptop.laptop.title).toBe('Mackbook')
})
test('upgrade laptop to mackbook', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'},
    books: ['html', 'css', 'js', 'react'],
  }

  const copyUser = moveUserToOtherHouse(user, 39)

  expect(user).not.toBe(copyUser)
  expect(user.address).not.toBe(copyUser.address)
  expect(user.books).toBe(copyUser.books)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.address.house).toBe(12)
  expect(copyUser.address.house).toBe(39)
})
test('add new books to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'},
    books: ['html', 'css', 'js', 'react'],
  }

  const copyUser = addNewBooksToUser(user, ['Betman', 'Spider-man'])

  expect(user).not.toBe(copyUser)
  expect(user.address).toBe(copyUser.address)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.books).not.toBe(copyUser.books)
  expect(copyUser.books.length).toBe(6)
  expect(copyUser.books[4]).toBe('Betman')
  expect(copyUser.books[5]).toBe('Spider-man')
})
test('add new books to user', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'},
    companies: [{id: 1, title: 'epam'}, {id: 2, title: 'it-incubator'},],
  }

  const copyUser = addNewCompany(user, {id: 3, title: 'google'})

  expect(user).not.toBe(copyUser)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.companies).not.toBe(copyUser.companies)
  expect(copyUser.companies.length).toBe(3)
  expect(copyUser.companies[2].title).toBe('google')
})
test('update company to user', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'ZenBook'},
    companies: [{id: 1, title: 'eПam'}, {id: 2, title: 'it-incubator'},],
  }

  const copyUser = updateCompany(user, 1, 'epam') as UserWithLaptopType & WithCompaniesType

  expect(user).not.toBe(copyUser)
  expect(user.laptop).toBe(copyUser.laptop)
  expect(user.companies).not.toBe(copyUser.companies)
  expect(copyUser.companies[0].title).toBe('epam')
  expect(user.companies[0].title).toBe('eПam')
})


type CompanyType = {
  id: number
  title: string
}
export type CompaniesType = {
  [key: string]: CompanyType[]
}
test('update company', () => {
  let companies: CompaniesType = {
    'Dimych': [{id: 1, title: 'eПam'}, {id: 2, title: 'it-incubator'},],
    'Artem': [{id: 2, title: 'it-incubator'}],
  }

  const copyCompanies = updateCompanyTitle(companies, 'Dimych', 2, 'IT-Kamasutra')

  expect(companies['Dimych']).not.toBe(copyCompanies['Dimych'])
  expect(companies['Artem']).toBe(copyCompanies['Artem'])
  expect(copyCompanies['Dimych'][1].title).toBe('IT-Kamasutra')
})
