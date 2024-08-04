import { cn } from "@/lib/utils"
import { ClassNameProps } from "@/types"


export const MaximizeIcon = ({ className }: ClassNameProps) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-5', className)}
    >
      <path d="M15 3L21 3 21 9" />
      <path d="M9 21L3 21 3 15" />
      <path d="M21 3L14 10" />
      <path d="M3 21L10 14" />
    </svg>
  )
}



