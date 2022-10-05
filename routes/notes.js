const express = require('express');
const router = express.Router();
const {getNotes, getNote, updateNote} = require('../controllers/notes');

router.get(('/'),getNotes);
router.get('/:id', getNote)
router.put('/', updateNote)
router.put('/:id', updateNote)


// router.route('/').get(getNotes);

module.exports = router;