import { Autocomplete } from '@mui/material';
import styled from 'styled-components';

export const FormAutoComplete = styled(Autocomplete)`
  width: 100%;
  & .MuiAutocomplete-endAdornment {
    margin-top: -6px;
  }
`;
