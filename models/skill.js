const skills = [
    {id: 125223, name: 'HTML', done: true},
    {id: 127904, name: 'CSS', done: false},
    {id: 139608, name: 'Javascript', done: false}
];

module.exports ={
    getAll,
    getName,
    getOne,
}; 


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