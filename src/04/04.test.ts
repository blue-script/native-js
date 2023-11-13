test.skip('should take old men older then 90', () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const oldAges = ages.filter(age => age > 90);

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

test.skip('should take courses chipper 160 ', () => {
  const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
  ]

  type CourseType = {
    title: string
    price: number
  }

  const chipCourses = courses.filter(course => course.price < 160);

  expect(chipCourses.length).toBe(2)
  expect(chipCourses[0].title).toBe('CSS')
  expect(chipCourses[1].title).toBe('REACT')
})

test.skip('get only completed tasks', () => {
  const tasks = [
    {id: 1, title: 'milk', isDone: false},
    {id: 2, title: 'bread', isDone: true},
    {id: 3, title: 'salt', isDone: false},
    {id: 4, title: 'sugar', isDone: true},
  ];

  const completedTasks = tasks.filter(task => task.isDone);

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].title).toBe('bread')
  expect(completedTasks[1].title).toBe('sugar')
})
test.skip('get only uncompleted tasks', () => {
  const tasks = [
    {id: 1, title: 'milk', isDone: false},
    {id: 2, title: 'bread', isDone: true},
    {id: 3, title: 'salt', isDone: false},
    {id: 4, title: 'sugar', isDone: true},
  ];

  const uncompletedTasks = tasks.filter(task => !task.isDone);

  expect(uncompletedTasks.length).toBe(2)
  expect(uncompletedTasks[0].id).toBe(1)
  expect(uncompletedTasks[1].id).toBe(3)
})