import { Children, useState } from "react";

interface Props{
    children:string;
    color:string;
    onClick: () => void;
}
function Button({onClick, children, color}: Props){

   const [isClick, setIsClick] = useState('');
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
  )
}

export default Button;
