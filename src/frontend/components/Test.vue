<template>
  <div id="test">
    <div>
      <div>
        <input @click="getPath" type="button" value="PATH">
        <p>{{ pathResult }}</p>
      </div>
      <div>
        <input type="text" v-model="query">
        <input @click="getQuery(query)" type="button" value="QUERY">
        <p>{{ queryResult }}</p>
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
        pathResult: "",
        query: "",
        queryResult: ""
      }
    },
    methods: {
      async getPath() {
        this.isLoading = true
        const { data } = await TestRepository.get()
        this.isLoading = false
        this.pathResult = data
      },
      async getQuery(str) {
        const query = `?input=${str}`
        this.isLoading = true
        const { data } = await TestRepository.get(query)
        this.isLoading = false
        this.queryResult = data
        this.query = ""
      }
    }
  }
</script>