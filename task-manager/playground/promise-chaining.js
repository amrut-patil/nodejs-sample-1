require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// User.findByIdAndUpdate("5d12644f2a94f322286ce804", {age: 22}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 22});
// }).then((count) => {
//     console.log(count);
// }).catch((error) => {
//     console.log(error);
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age: age});
//     const count = await User.countDocuments({age: age});

//     return {user: user, count: count};
// }

// updateAgeAndCount("5d12644f2a94f322286ce804", 14).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })



// Task.findByIdAndRemove('5d12e701f9d4720f349d44eb').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false});
// }).then((count) => {
//     console.log(count);
// }).catch((error) => {
//     console.log(error);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: true});

    return {deletedTask: task, count: count};
}

deleteTaskAndCount("5d12f44e682d3e1ff019c937").then((result) => {
    console.log(result)
}).catch((e) => {
    console.log("error: ", e);
})