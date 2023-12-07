import { useState } from "react";
interface Props{
    items:string[];
    heading:string;
    onSelecetedItem: (item:string) => void;
}
function ListGroup ({items, heading, onSelecetedItem} :Props){
    // items = []
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>nothing found</p>}
        <ul className="list-group col-5">
            {items.map((item, index) =>(<li className={index === selectedIndex ? 'list-group-item active' : 'list-group-item '} key={item} onClick={() =>{
                setSelectedIndex(index);
                onSelecetedItem(item);  }}>{item}</li>))}
          </ul>
    </>);
}
export default ListGroup;