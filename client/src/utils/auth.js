export const loginUser = (email, role) => {
  localStorage.setItem("user", JSON.stringify({ email, role }));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const registerUser = (data) => {
  localStorage.setItem(`registered_${data.email}`, JSON.stringify(data));
};

export const getRegisteredUser = (email) => {
  return JSON.parse(localStorage.getItem(`registered_${email}`));
};
