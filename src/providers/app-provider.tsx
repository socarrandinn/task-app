import { ChildrenProps } from "@/types"
import { ReactQueryProvider } from "./react-query-provider"


const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}

export default AppProvider