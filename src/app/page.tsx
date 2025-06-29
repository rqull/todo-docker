import { db } from "@/utils/db";
import * as services from "@/services/todo-service";
import React from "react";
import SaveButton from "@/components/save-buttons";

const Home = async () => {
  // 2.  Fetch Todos
  const todos = await db.todo.findMany({ select: { id: true, input: true } });

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-md p-6">
        <form action={services.createTodo} className="flex items-center">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
            type="text"
            name="input"
            placeholder="Input new todo..."
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            Add Todo
          </button>
        </form>
        <div className="mt-6 space-y-4">
          {todos.map((todo) => (
            <form
              key={todo.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <input type="hidden" name="inputId" value={todo.id} />
              <input
                type="text"
                name="input"
                defaultValue={todo.input}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <div className="flex gap-2">
                <SaveButton />
                <button
                  formAction={services.deleteTodo}
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
