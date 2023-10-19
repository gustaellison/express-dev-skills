const skills = [
    {id: 125223, name: 'HTML', done: true},
    {id: 127904, name: 'CSS', done: false},
    {id: 139608, name: 'Javascript', done: false}
];

module.exports ={
    getAll,
    getName,
    getOne,
    create,
    update,
}; 

function update(id, skillUpdate) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    let skill = skill[idx]
    skill = {
        ...skill,
    }
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find((skill) => {
        return skill.id === id
    });
}

function getName() {
    return skills.map((skills) => skills.name)
}

function create(body) {
    const newSkill = {
        id: skills.length + 1,
        name: body.mySkill,
        done: false

    }
    skills.push(newSkill)
    return newSkill
} 