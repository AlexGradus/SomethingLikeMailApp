import { s } from '.';
import { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { useSelector } from 'react-redux';
import { MyState } from '../../interface/interface';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {


  

  const handleClose = () => {
    setOpenCondition(false)
  };
  const [message, setMessage] = useState(1);
  const [openCondition, setOpenCondition] = useState(false);

  const currentMessage = useSelector((state:MyState)=>state.app.currentMessage);
  if(currentMessage.length>message){
    setMessage(currentMessage.length);
    setOpenCondition(true)

  }

const vertical = 'bottom';
const horizontal = 'left';

  

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openCondition}
        onClose={handleClose}
        message="New Message"
        key={vertical + horizontal}
      />
    </div>
  );
}

