import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Guilherme Lima',
    email: 'guiaraujo@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lara',
    email: 'lara@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;