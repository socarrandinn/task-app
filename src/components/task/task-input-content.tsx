'use client'
import { useMemo } from "react"
import { PlusIcon } from "../icons/plus-icon"
import { cn } from "@/lib/utils"
import { useTask } from "@/app/contexts/TaskContext"
import Editor from "./task-input"

export const TaskInputContent = () => {
  const { active, onOpenTask } = useTask()
  const content = useMemo(() => active ? <Editor /> : <> Type to add new task</>, [active])

  return (
    <div onClick={onOpenTask} className={cn('flex flex-row gap-2 md:gap-4 px-4 py-2 min-h-10 items-start bg-paper', 'min-h-14')}>
      <PlusIcon className="text-primary mt-0.5"/>
      {content}
    </div>
  )
}


