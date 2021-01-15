<template>
  <div id="test">
    <div>
      <div>
        <input @click="get" type="button" value="GET">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory }  from '../repository/repositoryFactory.ts'
const TestRepository = RepositoryFactory.build('test')
  export default {
    name: 'GETTest',
    data() {
      return {
        isLoading: false,
        text: ""
      }
    },
    methods: {
      async get() {
        this.isLoading = true
        const { data } = await TestRepository.get()
        this.isLoading = false
        this.text = data
      }
    }
  }
</script>