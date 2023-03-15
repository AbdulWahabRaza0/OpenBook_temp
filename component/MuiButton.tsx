import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import styled from 'styled-components';

export default function MuiButton({
  children,
  bg,
  color,
  width,
  height,
  done,
  radius,
  hover,
  padding,
  size,
  border,
  margin,
  clicked,
}: any) {
  const style = {
    overflow: 'auto',

    boxShadow: 24,

    // p: 4,
  };
  return (
    <Button
      onClick={() => clicked()}
      sx={{
        bgcolor: bg,
        borderRadius: radius,
        color: color,
        width: width,
        height: height,
        padding: padding,
        maxWidth: '100px',
        overflow: 'auto',
        minWidth: width,
        fontSize: size,
        border: border,
        margin: margin,
        textTransform: 'capitalize',
        ':hover': {
          bgcolor: hover,
        },
      }}
      variant='contained'
      endIcon={done ? <DoneIcon /> : ''}
    >
      {children}
    </Button>
  );
}
