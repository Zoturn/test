<template>
  <div>
    <button @click="Create">CREATE PERSON</button>
    <p>MALE</p>
    <pure-vue-chart
      :points=male
      :show-y-axis="true"
      :show-x-axis="true"
      :width="400"
      :height="200"
      :show-values="true"
    />
    <p>FEMALE</p>
    <pure-vue-chart
      :points=female
      :show-y-axis="true"
      :show-x-axis="true"
      :width="400"
      :height="200"
      :show-values="true"
    />
  </div>
</template>

<script>
    import PureVueChart from 'pure-vue-chart'
    import list from '../../list'

    export default {
        name: 'Visualisation',
        components: {
            PureVueChart
        },
        data() {
            return {
                male: [],
                female: []
            }
        },
        created() {
            this.getLists()
        },
        methods: {
            getLists() {
                list.forEach(item => {
                    if (item.gender === 'male') {
                        this.male.push(item.age)
                    } else {
                        this.female.push(item.age)
                    }
                })
                this.male.sort(function (a, b) {
                    return a - b
                })
                this.female.sort(function (a, b) {
                    return a - b
                })
            },
            Create() {
                this.$router.push('col')
            }
        }
    }
</script>

</

style

>
