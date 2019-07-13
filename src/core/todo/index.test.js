import {todos, visibilityFilter} from "./reducers";
import {default as types} from './types'


describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todos(undefined, {})).toEqual([
      {
        completed: false,
        id: 0,
        text: "Use Redux"
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
        {
          completed: false,
          id: 0,
          text: "Run the tests"
        }
      ])

    expect(
      todos(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }
    ])
  })
})
