import { useState, useEffect } from "react";
import axios from "axios";
const TodoList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const bringAll = async () => {
    const allfetchItems = await axios.get("http://localhost:9000");
    setList(allfetchItems.data);
    console.log(allfetchItems.data);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:9000/createTodo", {
      ListItem: item,
    });
    bringAll();
  };
  //   const handleUpdate = async (id) => {
  //     await axios.put("http://localhost:9000//updateTodo" + id,{});
  //   };
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:9000/deleteTodo/" + id);
  };
  useEffect(() => {
    bringAll();
  }, []);

  return (
    <form>
      <h1>Todo List</h1>
      <input
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {list &&
          list.map((val) => (
            <div key={val._id}>
              <li>{val.ListItem}</li>

              <button onClick={() => handleDelete(val._id)}>Delete</button>
            </div>
          ))}
      </ul>
    </form>
  );
};

export default TodoList;
