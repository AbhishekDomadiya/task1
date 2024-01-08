function getRolesFromLocalStorage() {
    const keys = Object.keys(localStorage);
    const rolesKeys = keys.filter(key => key.startsWith('roles'));
    
    const rolesData = rolesKeys.map(key => {
      return {
        key,
        value: localStorage.getItem(key)
      };
    });
  
    return rolesData;
}

function findUserInLocalStorage(username, password) {
    const rolesData = getRolesFromLocalStorage();
    const foundUser = rolesData.find(user => {
      const userData = JSON.parse(user.value);
      return userData.username === username && userData.password === password;
    });
  
    return foundUser || null;
}

export {getRolesFromLocalStorage,findUserInLocalStorage} 