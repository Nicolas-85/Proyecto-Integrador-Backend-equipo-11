const express = require('express')
const router = express.Router()

const controller = require('../../controllers/admin/adminController')

router.get('/admin',  controller.admin); //cambiar a /admin

router.get('/admin/create', controller.createGet);

router.post('/admin/create', controller.createPost);

router.get('/admin/edit/:id', controller.editGet);

router.put('/admin/edit/:id', controller.editPut);

router.delete('/admin/delete/:id', controller.destroy);

module.exports = router;