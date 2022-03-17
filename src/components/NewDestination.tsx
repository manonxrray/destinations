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

type ModalProps = {
  close: Function;
  open: boolean
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
  return (
    <Modal
      open={open}
      onClose={() => close()}
    >
      <ModalContent>
        <Typography variant="h6" component="h2">
          Ajouter une nouvelle destination
        </Typography>

        <Form>
          <TextField
            required
            id="filled-required"
            label="Nom de la destination"
            type="string"
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="Adresse"
            type="string"
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="Lien de l'image"
            type="string"
            variant="filled"
          />
          <FormFooter>
            <TextField
              required
              id="filled-number"
              label="Nb Habitants"
              type="number"
              variant="filled"
            />
            <TextField
              required
              id="filled-number"
              label="Nb Hôtels"
              type="number"
              variant="filled"
            />
            <TextField
              required
              id="filled-number"
              label="Revenu Moy"
              type="number"
              variant="filled"
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
              InputProps={{
                endAdornment: <InputAdornment position="end">km²</InputAdornment>,
              }}
            />
          </FormFooter>
          <FormControlLabel control={<Switch defaultChecked />} label="Activer" />
          <div>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Confirm</Button>
          </div>
        </Form>
      </ModalContent>
    </Modal>
  )
};

export default NewDestination;
