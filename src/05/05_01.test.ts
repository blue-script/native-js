import {createGreetingMessages, ManType} from './05_01';

let people: Array<ManType>;

beforeEach(()=>{
  people = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
  ];
})

test.skip('should get array greeting messages', ()=> {
  const messages = createGreetingMessages(people);

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe('Hello Andrew. Welcome to It-Incubator')
  expect(messages[1]).toBe('Hello Alexander. Welcome to It-Incubator')
  expect(messages[2]).toBe('Hello Dmitry. Welcome to It-Incubator')
})