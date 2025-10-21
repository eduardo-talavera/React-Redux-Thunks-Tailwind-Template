import type { HTMLAttributes, ReactNode } from "react"

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
}

export const Card = ({ children, ...props }: Props) => {
  return (
    <div 
      className="p-5 shadow-md rounded bg-white"
      { ...props }
    >
      { children }
    </div>
  )
}
