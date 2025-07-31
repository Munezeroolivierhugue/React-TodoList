import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='flex flex-col items-center gap-10 m-10'>
      <h1 className='text-6xl text-gray-300'> Todos </h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
