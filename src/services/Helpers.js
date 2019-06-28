const saveData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
}

const getSavedData = (name) => {
  const newData = JSON.parse(localStorage.getItem(name));
  return newData;
}

export {saveData, getSavedData};