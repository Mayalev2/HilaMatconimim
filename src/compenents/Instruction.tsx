import React from 'react';
interface Props{
    instruction:[]
}

function Instruction({instruction}:Props) { 
    const newinstruction: any = instruction;
    console.log(newinstruction);
    

    return (        
            <>
                      
                      <div className='d-flex flex-column col-12 text-end mb-5 pb-5' style={{direction:"rtl"}} >
                            <span className='display-5 mb-4 d-flex justify-content-start'>אופן הכנה</span>
                            <div className="list-wrap">
                                <div className="list">
                                    {newinstruction.map((item:any, i:number)=>(
                                        <div>{newinstruction[i]}</div>

                                    )
                                    )}
                                </div>
                            </div>
                        </div>
            </>
        );
    }
export default Instruction;