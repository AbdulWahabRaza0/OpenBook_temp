import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { P } from './Typography';

export default function ModalView({
  children,
  title,
  show,
  setshow,
  height,
  width,
}: any) {
  const [openRegister, setOpenRegister] = useState(true);
  const style2 = {
    position: 'absolute',
    overflow: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: ' auto',
    // height: "95vh",
    height: 'auto',

    bgcolor: '#0f0f10',
    borderRadius: '29px',
    boxShadow: 24,

    // p: 4,

    outline: '0.851798px solid rgba(78, 78, 78, 0.36)',
  };
  return (
    <>
      <Modal
        data-aos='zoom-in'
        open={show}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={style2}
          className='ps-4 pe-4 pb-4 pt-3'
          style={{
            height: `${height ? height : '95vh'}`,
            width: `${width ? width : '65vw'}`,
          }}
        >
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'right',
            }}
          >
            <CloseIcon
              className='mb-1'
              style={{ cursor: 'pointer', color: 'white' }}
              onClick={() => {
                setshow(false);
              }}
            />
          </span>
          <P fontSize='30px' color='white' style={{ textAlign: 'center' }}>
            {title}
          </P>
          <br />
          {children}
        </Box>
      </Modal>
    </>
  );
}
