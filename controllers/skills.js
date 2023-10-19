const Skill = require('../models/skill')

module.exports = {
    index,
    show,
}

function index (req, res) {
    res.render('skills/index', { skills : Skill.getAll() })
}

function show (req, res) {
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    res.render('skills/show', {
        mySkill : Skill.getOne(id)
    })
}