const addTask = (description) => {
    const data = [];
    let index = 1;
    if (data.length > 0) {
        index = data.length + 1;
    }
    const info = { description, completed: false, index };
    data.push(info);
    return data.length
};



module.exports = { addTask };