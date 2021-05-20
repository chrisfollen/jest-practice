import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Todo from '../todo'

test('should render incompleted todos', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false }
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('wash')
    expect(todoElement).not.toContainHTML('<strike>')
})

test('should render completed todos', () => {
    const todo = { id: 2, title: 'make dinner', completed: true }
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-2')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('dinner')
    expect(todoElement).toContainHTML('</strike>')
})

afterEach(() => {
    cleanup()
})

test('matches snapshot', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false }
    const tree = renderer.create(<Todo todo={todo}/>).toJSON()
    expect(tree).toMatchSnapshot()
})