import React from 'react';

interface Props{
  stars: number;
  review:[["",""]]
}
function review({stars, review}:Props) {  
    return (        
            <>
                        <div className='d-flex justify-content-center mb-5 pb-5 col-12' style={{backgroundColor:"rgb(171 108 217 / 18%)", borderRadius:"10px"}}>
                            <div className='d-flex flex-column col-12 col-lg-8'>
                                <span className='h2 mb-2 text-center pt-4'>חוות דעת</span>
                                <div className='d-flex justify-content-center mb-5'>
                                <span className="star"></span>
                                <span className="fw-bold h5">{stars}</span>
                                </div>
                                {review.map((item,index) => (
                                <div  className='d-flex justify-content-end align-items-center mb-4' style={{border:"2px solid #a7a6a6", borderRadius:"10px",  backgroundColor:"white"}}>
                                <div className='d-flex flex-column pe-2'>
                                  <span className='fw-bold text-end'>:{review[index][0]}</span>
                                  <span className='' style={{marginRight:"15px"}}>{review[index][1]}</span>
                                </div>
                              </div>
                                ))}
                            </div>
                        </div>
            </>
        
        );
    }
export default review;