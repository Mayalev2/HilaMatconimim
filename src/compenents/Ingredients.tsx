import React from 'react';
import {useState} from 'react';


interface Props{
  ingredent:{},
  num:number,
  multi:number

}
function Ingredients({ingredent, num, multi}:Props) {  
  const [ingreMulti, setIngredentMulti] = useState(1);
  var p = Math.pow(10, 2);
  const newingrediant: any = ingredent;
  let count = 0;  
  // setIngredentMulti(newingrediant["grams"][count]* Number(multi));
  
    return (        
            <>
               {newingrediant["prpous"] != "" &&
                <span className='h4 mb-2 mt-2'>{newingrediant["prpous"]}</span>}
                            <div className="list-group list-group-flush" style={{direction:"rtl"}}>
                            {newingrediant["ingrediant"].map((item:any) => (                            
                            <div className="checkbox-wrapper-11">
                              <input id={`${num}${count}`} type="checkbox" name="r" value="2"/>

                              {newingrediant["tsp"][count] >= 1  ?
                              <label htmlFor ={`${num}${count}`}>{Math.round(newingrediant["tsp"][count]* multi * p)/p} כפיות {newingrediant["ingrediant"][count++]}</label>
                              :<>                              
                              {newingrediant["tbsp"][count] >= 1 &&
                               <label htmlFor ={`${num}${count}`}>{Math.round(newingrediant["tbsp"][count]* multi * p)/p} כפות {newingrediant["ingrediant"][count++]}</label>
                              }
                              
                              {newingrediant["cups"][count] >= 1 &&
                               <label htmlFor ={`${num}${count}`}>{Math.round(newingrediant["cups"][count]* multi * p)/p} כוס {newingrediant["ingrediant"][count++]}</label>
                              }
                              
                              </>}
                              {Math.round(newingrediant["grams"][count]* multi * p)/p >=1000 ?
                              <label htmlFor ={`${num}${count}`}>{Math.round(newingrediant["grams"][count]/1000 * multi * p)/p} קג {newingrediant["ingrediant"][count++]}</label>
                              :<>
                              {Math.round(newingrediant["grams"][count]* multi * p)/p <1000 &&
                              <label htmlFor ={`${num}${count}`}>{Math.round(newingrediant["grams"][count]* multi * p)/p} גרם {newingrediant["ingrediant"][count++]}</label>
                              }
                              </>}
                            </div>
                              ))}
                              </div>

            </>
        
        );
    }
export default Ingredients;