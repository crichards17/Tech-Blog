const { Comment } = require('../models');

const commentData = [{
        comment_text: "Test text for first comment",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Test text for second comment",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Test text for third comment",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = async () => {
    await Comment.bulkCreate(commentData);
}

module.exports = seedComments;