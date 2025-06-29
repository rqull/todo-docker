"use client";
import { updateTodo } from "@/services/todo-service";
import { useFormStatus } from "react-dom";

import React from "react";

const SaveButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      formAction={updateTodo}
      type="submit"
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
};

export default SaveButton;
