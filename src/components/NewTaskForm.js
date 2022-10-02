import React from "react";

function NewTaskForm() {
function NewTaskForm({ categories, onTaskFormSubmit }) {
  let newArr = categories.filter(cat => cat !== "All").map((cat, ind) => <option key={ind}>{cat}</option>);
  return (
    <form className="new-task-form">
    <form
      className="new-task-form"
      onSubmit={function (event) {
        event.preventDefault();
        let newTask = document.getElementsByName("text")[0].value;
        let taskCategory = document.getElementsByName("category")[0].value;
        onTaskFormSubmit({ "text": newTask, "category": taskCategory })
      }}
      autoComplete="off"
    >
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {newArr}
        </select>
      </label>
      <input type="submit" value="Add task" />
      <input type="submit"
        value="Add task" />
    </form>
  </form>
  );
}
}
export default NewTaskForm;