import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    id: '',
    email: '',
    roles: [],
    firstname: '',
    lastname: '',
    pseudo: '',
    avatar: null,
  },
};

export const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {
    addProfil: (state, action) => {
      state.value.id = action.payload.id;
      state.value.email = action.payload.email;
      state.value.roles = action.payload.roles;
      state.value.firstname = action.payload.firstname;
      state.value.lastname = action.payload.lastname;
      state.value.pseudo = action.payload.pseudo;
      state.value.avatar = action.payload.avatar;
    },
    resetProfil: state => {
      state.value = {
        id: '',
        email: '',
        roles: [],
        firstname: '',
        lastname: '',
        pseudo: '',
        avatar: null,
      };
    },
  },
});

export const {addProfil, resetProfil} = profilSlice.actions;

export default profilSlice.reducer;
