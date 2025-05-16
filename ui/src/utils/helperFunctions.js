export const getUserInitials = (fullName) => {
  if (!fullName) return "";

  const nameParts = fullName.trim().split(" ");

  const firstNameInitial = nameParts[0]?.[0] || "";
  const lastNameInitial = nameParts[nameParts.length - 1]?.[0] || "";

  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

export const getPageNumbers = (totalEntries, pageSize, currentPage) => {
  const totalPages = Math.ceil(totalEntries / pageSize);
  const maxVisiblePages = 6;

  if (totalPages <= maxVisiblePages + 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  pages.push(1); // always show first page

  let start = Math.max(2, currentPage - 2);
  let end = Math.min(totalPages - 1, currentPage + 2);

  // Adjust window if near start or end
  if (currentPage <= 3) {
    start = 2;
    end = 5;
  } else if (currentPage >= totalPages - 2) {
    start = totalPages - 4;
    end = totalPages - 1;
  }

  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) {
    if (i > 1 && i < totalPages) pages.push(i);
  }
  if (end < totalPages - 1) pages.push("...");

  pages.push(totalPages); // always show last page

  return pages;
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

export const removeItemFromLocalStorage = (key, value) => {
  localStorage.removeItem(key, JSON.stringify(value));
};
