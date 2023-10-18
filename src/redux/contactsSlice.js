import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },

  // Це застарілий метод
  // extraReducers: {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.contacts = payload;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   },
  // },

  // reducers не можемо використовувати, бо він створює action і reducer.
  // А в нас action вже створений.
  // Нам потрібно створити тільки reducer для опрацювання action
  // reducers: {
  //   pending: state => {
  //     state.isLoading = true;
  //   },
  //   fulfilled: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.contacts = payload;
  //     state.error = null;
  //   },
  //   rejected: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
