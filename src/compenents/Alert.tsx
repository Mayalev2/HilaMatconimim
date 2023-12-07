import { ReactNode } from "react"

interface Props{
    children: ReactNode;
}
const alert = ({children}:Props) => {
  return (
    <div className={children !=='' ? 'alert alert-primary' : 'd-none'} role="alert"> {children}</div>
  )
}

export default alert