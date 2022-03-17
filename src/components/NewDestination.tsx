import { Modal, Typography } from '@mui/material';
import styled from '@emotion/styled';

type ModalProps = {
  close: Function;
  open: boolean
};

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background: #fff;
  border: 2px solid #000;
  boxShadow: 24;
  p: 4
`;


const NewDestination = ({ close, open }: ModalProps): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={() => close()}
    >
      <ModalContent>
        <Typography variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </ModalContent>
    </Modal>
  )
};

export default NewDestination;
