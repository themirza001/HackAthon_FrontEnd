export const isUserLoggedIn = () => {
  let data = localStorage.getItem('data');
  if (data != null) return true;
  else return false;
};

export const doUserLogin = (data, next) => {
  localStorage.setItem('data', JSON.stringify(data));
  next();
};

export const doUserLogout = (next) => {
  localStorage.removeItem('data');
  next();
};

export const getCurrentUserDetail = () => {
  if (isUserLoggedIn()) {
    return JSON.parse(localStorage.getItem('data')).user;
  } else {
    return false;
  }
};
