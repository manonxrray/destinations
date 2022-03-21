import {
  Modal,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  InputAdornment,
  Button
} from '@mui/material';
import styled from '@emotion/styled';

import { useDestination } from '../context/destination-provider';

type ModalProps = {
  close: Function;
  open: boolean;
};

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  background: #fff;
  border-radius: 10px;
  padding: 2rem
`;

const Form = styled.form`
  display: flex;
  flex-direction: column
`;

const FormFooter = styled.div`
  flex-direction: row
`;

const NewDestination = ({ close, open }: ModalProps): JSX.Element => {
  // This is the new destination state I'm going to store in the local storage...
  const state = {
    city: '',
    address: '',
    image: '',
    citizens: 0,
    hotels: 0,
    income: 0,
    area: 0
  };

  // ...using this custom hook (src/context/destination-provider)
  const { setDestination } = useDestination();

  const handleSubmit = () => {
    setDestination(state);
    /* 
      It looks like my submit doesn't work because the two following actions
      are not happening
    */
    console.log(state);
    close();
  };

  return (
    <Modal
      open={open}
      onClose={() => close()}
    >
      <ModalContent>
        <Typography variant="h6" component="h2">
          Ajouter une nouvelle destination
        </Typography>

        <Form onSubmit={() => handleSubmit}>
          <TextField
            required
            id="filled-required"
            label="Nom de la destination"
            type="string"
            variant="filled"
            onChange={(e => state.city = e.target.value)} 
          />
          <TextField
            required
            id="filled-required"
            label="Adresse"
            type="string"
            variant="filled"
            onChange={(e => state.address = e.target.value)} 
          />
          <TextField
            required
            id="filled-required"
            label="Lien de l'image"
            type="string"
            variant="filled"
            onChange={(e => state.image = e.target.value)} 
          />
          <FormFooter>
            <TextField
              required
              id="filled-number"
              label="Nb Habitants"
              type="number"
              variant="filled"
              onChange={(e => state.citizens = parseInt(e.target.value))} 
            />
            <TextField
              required
              id="filled-number"
              label="Nb Hôtels"
              type="number"
              variant="filled"
              onChange={(e => state.hotels = parseInt(e.target.value))} 
            />
            <TextField
              required
              id="filled-number"
              label="Revenu Moy"
              type="number"
              variant="filled"
              onChange={(e => state.income = parseInt(e.target.value))} 
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
            />
            <TextField
              required
              id="filled-number"
              label="Superficie"
              type="number"
              variant="filled"
              onChange={(e => state.area = parseInt(e.target.value))} 
              InputProps={{
                endAdornment: <InputAdornment position="end">km²</InputAdornment>,
              }}
            />
          </FormFooter>
          <FormControlLabel control={<Switch defaultChecked />} label="Activer" />
          <div>
            <Button
              type="button"
              variant="outlined"
              onClick={() => close()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">Confirm</Button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  )
};

export default NewDestination;
