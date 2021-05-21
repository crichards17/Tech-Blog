const { Post } = require('../models');

const postData = [{
        title: 'Test post number 1',
        content: 'This is the body of test post number 1.',
        user_id: 1

    },
    {
        title: 'Test post number 2',
        content: 'This is the body of test post number 2.',
        user_id: 2
    },
    {
        title: 'Test post number 3',
        content: 'This is the body of test post number 3.',
        user_id: 3
    }
];

const seedPosts = async () => {
    await Post.bulkCreate(postData);
}

module.exports = seedPosts;