const ages = [18, 20, 22, 1, 100, 90, 14];

type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'REACT', price: 150},
]

const chipPredicate = (course: CourseType) => {
  return course.price < 160;
}