import * as React from 'react';
import {  useSelector } from 'react-redux';
import { MyState } from '../../interface/interface';
import CustomDialog from './Dialog';


export default function InboundMessage() {
  const currentMessage = useSelector((state:MyState)=>state.app.currentMessage);
  

  return (
    <div>
       {currentMessage.map((item:string[],index:number) => (
        <React.Fragment key={index}>
       
            <CustomDialog
              index={index}
              item={item}
            />
       
      </React.Fragment>
     
    ))}
    </div>
   
   
  );
}