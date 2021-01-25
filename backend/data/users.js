import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Eve Henderson',
        email: 'eve.henderson@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Larry Flint',
        email: 'larry.flint@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default users;