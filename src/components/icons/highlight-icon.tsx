import { cn } from "@/lib/utils"
import { ClassNameProps } from "@/types"


export const HighlightIcon = ({ className }: ClassNameProps) => {

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
      stroke="none"
    >
      <path
        d="M11.984.986a1 1 0 00-.984 1V2v-.001 4.014a1 1 0 002 0v-.015.001-4-.014a1 1 0 00-1-1h-.016.001v.001zM4.92 3.92a1 1 0 00-.698 1.716l2.83 2.83a1 1 0 101.414-1.414l-2.83-2.83a.997.997 0 00-.717-.303l.001.001zm14.131 0a.997.997 0 00-.687.303l-2.83 2.83a1 1 0 101.414 1.414l2.83-2.83a1 1 0 00-.697-1.717h-.03.001zM12.001 10a2 2 0 10-.002 3.999A2 2 0 0012 10zM2 11h-.015a1 1 0 000 2h4.028a1 1 0 000-2H2zm16 0h-.015a1 1 0 000 2h4.028a1 1 0 000-2H18zM7.74 15.23a.997.997 0 00-.688.303l-2.83 2.83a1 1 0 101.414 1.414l2.83-2.83a1 1 0 00-.697-1.717h-.03.001zm8.49 0a1 1 0 00-.699 1.716l2.83 2.83a1 1 0 101.414-1.414l-2.83-2.83a.997.997 0 00-.717-.303l.001.001zm-4.247 1.756a1 1 0 00-.984 1V18v-.001 4.014a1 1 0 002 0v-.015.001-4-.014a1 1 0 00-1-1h-.016.001v.001z"

      />
    </svg>


  )
}



