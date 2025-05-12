
export const getUserInitials = (fullName) => {
  if (!fullName) return "";

  const nameParts = fullName.trim().split(" ");

  const firstNameInitial = nameParts[0]?.[0] || "";
  const lastNameInitial = nameParts[nameParts.length - 1]?.[0] || "";

  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};


export const getPageNumbers = (entries, pageSize) => {
    const pagesCount = Math.ceil(entries / pageSize);
    return Array.from({ length: pagesCount }, (_, index) => index + 1);
  };

  export const getAuthToken = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const token = JSON.parse(localStorage.getItem("token"));
    const isAdmin = user.isAdmin;
    return {
      token,
      isAdmin,
    };
  };

  export const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const setItemInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  export const removeItemFromLocalStorage=(key, value)=>{
        localStorage.removeItem(key, JSON.stringify(value));
  }