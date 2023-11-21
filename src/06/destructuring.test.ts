import {MenType} from './Destucturing';

let props: MenType;
beforeEach(() => {
  props = {
    name: 'Dimych',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'},],
    address: {
      street: {
        title: 'Nezavisimosti street',
      },
    },
  }
})
test.skip('', () => {
  // const age = props.age
  // const lessons = props.lessons
  const {age, lessons} = props
  const {title} = props.address.street

  expect(age).toBe(32)
  expect(lessons.length).toBe(2)
  expect(title).toBe('Nezavisimosti street')
})
test('', () => {
  // const age = props.age
  // const lessons = props.lessons
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]
  const [, , ls3] = props.lessons

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')
  expect(ls3.title).toBe('3')

  expect(ls3).toStrictEqual({title: '3', name: 'react'})
})