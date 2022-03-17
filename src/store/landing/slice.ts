import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrgDetails } from '../../types/LandingPage';

interface IObject {
  [key: string]: OrgDetails
}

const slice = createSlice({
  name: 'landing',
  initialState: {} as IObject,
  reducers: {
    setOrganizations: (state, { payload }:PayloadAction<OrgDetails>) => {
      state.data = payload;
    },
    setSelectedOrganization: (state, { payload }:PayloadAction<OrgDetails>) => {
      state.selectedOrg = payload;
    }
  }
});

export const { setOrganizations, setSelectedOrganization } = slice.actions;
export default slice.reducer;
