import { cn } from "@/lib/utils"
import { ClassNameProps } from "@/types"


export const PlusIcon = ({ className }: ClassNameProps) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-5', className)}
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M12 8L12 16" />
      <path d="M8 12L16 12" />
    </svg>
  )
}



