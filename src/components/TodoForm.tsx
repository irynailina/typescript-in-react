import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  // const ref = useRef<HTMLInputElement>(null)
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        props.onAdd(title)
      setTitle("");
      // console.log(ref.current!.value)
      // ref.current!.value = ''
    }
  };
  return (
    <TextField
      onChange={changeHandler}
      value={title}
      // ref={ref}
      id="standard-basic"
      label="Enter your task"
      onKeyPress={keyPressHandler}
    />
  );
};

export default TodoForm;
