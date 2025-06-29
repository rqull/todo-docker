"use server";

import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

// 1.  Create Todo
export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  await db.todo.create({ data: { input: input } });

  revalidatePath("/");
}

// 3.  Update Todo
export async function updateTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const input = formData.get("input") as string;

  await db.todo.update({
    where: { id: inputId },
    data: { input: input },
  });

  revalidatePath("/");
}

// 4.  Delete Todo
export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await db.todo.delete({ where: { id: inputId } });
  revalidatePath("/");
}
