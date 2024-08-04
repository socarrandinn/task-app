import { TaskProvider } from "@/app/contexts/TaskContext"
import { TaskActions } from "./task-actions"
import { TaskInputContent } from "./task-input-content"

export const Task = () => {
  return (
    <TaskProvider>
      <section className="grid grid-cols-1">
        <TaskInputContent />
        <TaskActions />
      </section>
    </TaskProvider>
  )
}