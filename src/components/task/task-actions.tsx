'use client'
import { useTask } from "@/app/contexts/TaskContext"
import { CalendarIcon } from "../icons/calendar-icon"
import { EstimationIcon } from "../icons/estimation-icon"
import { HighlightIcon } from "../icons/highlight-icon"
import { MaximizeIcon } from "../icons/percent-icon"
import { Button } from "../ui/button"
import { ChildrenProps } from "@/types"
import { UnlockIcon } from "../icons/unlock-icon"

export const TaskActions = () => {
  const { onCloseTask } = useTask()
  return (
    <div className="bg-[#fafbfb] min-h-[56px] w-full flex flex-row rounded-b-[4px] p-2 justify-between items-center gap-2 flex-wrap">
      <div className="flex flex-row gap-4 md:gap-8 flex-wrap">
        <Button variant='secondary' disabled>
          <MaximizeIcon />
          Open
        </Button>
        <div className="flex flex-row gap-1 ">

          <Button variant='outline' disabled>
            <CalendarIcon />
            <Title>Today</Title>

          </Button>
          <Button variant='outline' disabled>
            <UnlockIcon />
            <Title>Public</Title>

          </Button>
          <Button variant='outline' disabled>
            <HighlightIcon />
            <Title>Highlight</Title>

          </Button>
          <Button variant='outline' disabled>
            <EstimationIcon />
            <Title>Estimation</Title>

          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-1 ml-auto mt-4 md:mt-0">
        <Button variant='secondary' onClick={onCloseTask}>
          Cancel
        </Button>
        <Button className="text-white">
          Ok
        </Button>
      </div>
    </div>
  )
}


const Title = ({ children }: ChildrenProps) => {
  return <span className="hidden xl:block">{children}</span>
}