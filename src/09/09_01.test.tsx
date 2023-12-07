function increaseAge(u: UserType) {
  u.age++
}

type UserType = {
  name: string
  age: number
  address?: {
    title: string
  }
}

test.skip('reference type test', () => {
  let user: UserType = {
    name: 'Dimych',
    age: 32,
    address: {
      title: 'Minsk'
    }
  }
  increaseAge(user)
  expect(user.age).toBe(33)
  const superman = user
  superman.age = 1000
  expect(user.age).toBe(1000)
})
test.skip('array reference test', () => {
  let users:UserType[] = [
    {
      name: 'Dimych',
      age: 32
    },
    {
      name: 'Dimych',
      age: 32
    },
  ]

  let admins = users
  admins.push({name:'Bad',age: 10})

  expect(users[2]).toEqual({name:'Bad',age: 10})
})
test.skip('value type test', () => {
  let usersCount = 100
  let adminsCount = usersCount
  adminsCount++
  expect(adminsCount).toBe(101)
})

test.skip('reference 2 obj test', () => {
  let user: UserType = {
    name: 'Dimych',
    age: 32,
    address: {
      title: 'Minsk'
    }
  }

  let user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: user.address
  }

  user2.address && (user2.address.title = 'Kanary')

  expect(user.address?.title).toBe('Kanary')
  expect(user.address).toEqual(user2.address)
  expect(user.address).toBe(user2.address)
})
test.skip('sort array test', () => {
  const letters = ['c', 'a', 'b']
  letters.sort()
  expect(letters).toEqual(['a','b','c'])
})
