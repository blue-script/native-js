import {moveUser, upgradeUserLaptop, UserWithLaptopType} from './10_01';

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
