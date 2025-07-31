import React from 'react'
import DeleteButton from './ui/DeleteButton'

function TodoItem() {
  return (
    <>
    <div className='flex flex-row gap-2'>
        <input type="checkbox" name="isDone" id="checkbox" />
        <label htmlFor="isDone">IAmHere</label>
        <DeleteButton />
    </div>
    <hr/>
    </>
  )
}

export default TodoItem