import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isNavDropDownOpen: false,
    isShoppingCartModalOpen: false,
    isSearchInputModalOpen: false,
    isDeleteConfirmationModalOpen: false,
    isChecked: false,
    selectedUserData: null,
    isChangePasswordModalOpen: false,
    changePasswordInputOne: true,
    changePasswordInputTwo: true,
    changePasswordInputThree: true,
    isAddProductModalOpen: false,
    isEditMode: false,
    isEditCategoryMode: false,
    selectedProduct: null,
    isAddCategoryModalOpen: false,
    selectedCategoryData: null,
};

export const configurationSlice = createSlice({
  name: "configurations",
  initialState,
  reducers: {

    toggleSidebar: (state, _) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      if (state.isSidebarOpen && state.isNavDropDownOpen) {
        state.isNavDropDownOpen = false;
      }
    },

    toggleNavDropDown: (state, _) => {
      state.isNavDropDownOpen = !state.isNavDropDownOpen;
      if (state.isSidebarOpen && state.isNavDropDownOpen) {
        state.isSidebarOpen = false;
      }
    },

    toggleShoppingCartModal:(state)=>{
      state.isShoppingCartModalOpen=!state.isShoppingCartModalOpen
    },
    toggleSearchInputModal:(state)=>{
      state.isSearchInputModalOpen=!state.isSearchInputModalOpen
    },


    toggleDeleteConfirmationModal:(state)=>{
      state.isDeleteConfirmationModalOpen=!state.isDeleteConfirmationModalOpen
    },

    toggleCheckingProduct:(state)=>{
      state.isChecked = ! state.isChecked
    },

    setSelectedUser:((state,{payload})=>{
      state.selectedUserData=payload;
    }),
    toggleChangePasswordModal:(state)=>{
      state.isChangePasswordModalOpen=!state.isChangePasswordModalOpen
    },
    toggleChangePasswordInputOne:(state)=>{
      state.changePasswordInputOne=!state.changePasswordInputOne
    },
    toggleChangePasswordInputTwo:(state)=>{
      state.changePasswordInputTwo=!state.changePasswordInputTwo
    },
    toggleChangePasswordInputThree:(state)=>{
      state.changePasswordInputThree=!state.changePasswordInputThree
    },
    toggleAddProductModal: (state) => {
      state.isAddProductModalOpen = !state.isAddProductModalOpen;
    },
    toggleEditMode: (state, { payload }) => {
      state.isEditMode = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },

    toggleAddCategoryModal: (state, { payload }) => {
      state.isAddCategoryModalOpen = !state.isAddCategoryModalOpen;
      if (payload) {
        state.selectedCategoryData = payload;
      } else {
        state.selectedCategoryData = null;
      }
    },
    toggleEditCategoryMode: (state, { payload }) => {
      state.isEditCategoryMode = payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleNavDropDown,
  toggleDeleteConfirmationModal,
  toggleShoppingCartModal,
  toggleSearchInputModal,
  toggleCheckingProduct,
  setSelectedUser,
  toggleChangePasswordModal,
  toggleChangePasswordInputOne,
  toggleChangePasswordInputTwo,
  toggleChangePasswordInputThree,
  toggleAddProductModal,
  toggleAddCategoryModal,
  toggleEditMode,
  toggleEditCategoryMode,
  setSelectedProduct,
  clearSelectedProduct
} = configurationSlice.actions;

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("loggedInUser");
    localStorage.clear();
    dispatch({
      type: "configurations/logout",
    });
  };
};