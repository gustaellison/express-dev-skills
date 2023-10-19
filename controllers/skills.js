const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}



function create(req, res) {
    const newSkill = Skill.create(req.body)
    res.redirect(`/skills/${newSkill.id}`);
    console.log(newSkill)
}

function newSkill(req, res){
    res.render('skills/new')
}


function show (req, res) {
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    res.render('skills/show', {
        mySkill : Skill.getOne(id)
    })
}

function index (req, res) {
    res.render('skills/index', { skills : Skill.getAll() })
}