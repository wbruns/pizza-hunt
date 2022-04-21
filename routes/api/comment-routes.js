const router = require('express').Router();
const { 
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// POST a comment at '/api/comments/:pizzaId'
router
    .route('/:pizzaId')
    .post(addComment);

// DELETE a comment at '/api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// DELETE a reply at '/api/comments/:pizzaId/:commentId/:replyId'
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;