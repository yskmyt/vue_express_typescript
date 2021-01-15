import Repository from './repository'

const resourse = '/test'
export default {
  get(path = "") {
    return Repository.get(`${resourse}${path}`)
  }
}