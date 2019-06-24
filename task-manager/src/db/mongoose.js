const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    userCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive ');
            }
        }
    },
    password: {
        type: String,
        required: true,
        triem: true,
        minlength: 7,
        lowercase: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
});

// const me = new User({
//     name: 'Adi  ',
//     email: 'Abc@PQr.com  ',
//     password: 'ammmmmm123'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('error', error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const task = new Task({
    description: ' Task 2  ',
    //completed: true
})

task.save().then((result) => {
    console.log(result);
}).then((error) => {
    console.log('error:', error);
})