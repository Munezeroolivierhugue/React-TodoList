import React from "react";
import DeleteButton from "./ui/DeleteButton";

interface TodoItemProps {
    word: string;
  }

function TodoItem({ word }: TodoItemProps) {
  
  return (
    <>
      <div className="flex flex-row gap-2">
        <input type="checkbox" name="isDone" id="checkbox" />
        <label htmlFor="isDone">{word}</label>
        <DeleteButton />
      </div>
      <hr className="text-gray-300"/>
    </>
  );
}

export default TodoItem;
