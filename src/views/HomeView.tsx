import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export const HomeView = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10">Home</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
