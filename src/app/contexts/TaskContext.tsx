'use client'
import { ChildrenProps } from '@/types';
import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from 'react';

type TaskContextValue = {
  active?: boolean
  setActive?: Dispatch<SetStateAction<boolean>>
  onOpenTask?: () => void
  onCloseTask?: () => void
}

const defaultValue: TaskContextValue = {}


const TaskContext = createContext<TaskContextValue>(defaultValue);


type TaskContextProps = ChildrenProps & {
  children: any
}

const TaskProvider = (props: TaskContextProps) => {
  const [active, setActive] = useState(false)

  const onOpenTask = useCallback(() => {
    setActive?.(true)
  }, [active, setActive])

  const onCloseTask = useCallback(() => {
    setActive?.(false)
  }, [active, setActive])

  return (
    <TaskContext.Provider
      value={{ active, setActive, onOpenTask, onCloseTask }}
      {...props}
    />
  );
}

const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    return {};
  }
  return context;
}

export { TaskProvider, useTask };