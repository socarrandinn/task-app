import { cn } from "@/lib/utils"
import { ClassNameProps } from "@/types"


export const CalendarIcon = ({ className }: ClassNameProps) => {

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
      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <path d="M16 2L16 6" />
      <path d="M8 2L8 6" />
      <path d="M3 10L21 10" />
    </svg>
  )
}



