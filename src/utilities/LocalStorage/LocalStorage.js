const getInstallData = () => {
    const data = JSON.parse(localStorage.getItem('install'));
    if (data) {
        return data;
    } else {
        return []
    }
}

const setInstallData = (id) => {
    const data = getInstallData();
    const newData = JSON.stringify([...data, id])
    localStorage.setItem('install', newData);
}

const removeItem = (id) => {
    const data = getInstallData();
    const index = data.findIndex(item => item == String(id));
    data.splice(index, 1);
    localStorage.setItem('install', JSON.stringify(data));
}

export { setInstallData, getInstallData, removeItem };