// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const projects = await db('projects')
    return projects.map(p => ({
        ...p,
        project_completed: !!p.project_completed
    }))
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    const newProject = await db('projects').where('project_id', id).first()
    return {...newProject, project_completed: Boolean(newProject.project_completed)}
}

module.exports = { getAll, create }