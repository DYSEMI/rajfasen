const  {Router} = require('express')
const  router = Router()

router.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body
    } catch (e) {
        res.status(500).json({message: 'valami nem okés!'})
    }
})

module.exports = router