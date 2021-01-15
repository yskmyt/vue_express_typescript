import TestRepository from './testRepository'

const repositories = {
  test: TestRepository,
}

export const RepositoryFactory = {
  build: (key: string) => {
    switch (key) {
    case 'test':
      return repositories.test
    default:
      return 
    }
  } 
}