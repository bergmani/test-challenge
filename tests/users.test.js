// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');

test('Obtener los usuarios', () =>{
    expect(getUsers()).toMatchObject('users');
})

// const getUsers = () => {
//     return users;

test('obtener id de cada usauario', () => {
    expect(getUser(3)).toMatchObject('id: 3, username: "goosemotionless", email: "dotmeheart@outlook.com", password: "12345abcde"');
});



// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation