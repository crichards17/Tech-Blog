const { User } = require('../models');

const userData = [{
        username: 'Bill',
        password: 'billpassword'

    },
    {
        username: 'Ted',
        password: 'tedpassword'
    },
    {
        username: 'Jim',
        password: 'jimpassword'
    }
];

const seedUsers = async () => {
    await User.bulkCreate(userData, {
        individualHooks: true
    });
}

module.exports = seedUsers;