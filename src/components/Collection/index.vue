<template>
  <div class="collection_container">
    <form @submit.prevent="onSubmit">
      <label>
        <span>Name</span>
        <input type="text" placeholder="name" v-model="name" required/>
      </label>
      <label>
        <span> Family name</span>
        <input type="text" placeholder="family name" v-model="fName" required/>
      </label>
      <label>
        <span>age</span>
        <input type="number" placeholder="age" v-model="age" required/>
      </label>
      <label>
        <span>mail</span>
        <input type="text" placeholder="mail" v-model="mail" required/>
      </label>
      <label>
        <span>phone</span>
        <input type="tel" placeholder="phone" v-model="phone" required/>
      </label>
      <label>
        <span>average salary</span>
        <input type="number" placeholder="average salary" v-model="salary" required/>
      </label>
      <div>
        <span>gender</span>
        <label>
          <input type="radio" name="gender" value="female" v-model="gender">
          <span>female</span>
        </label>
        <label>
          <input type="radio" name="gender" value="male" v-model="gender">
          <span>male</span>
        </label>
      </div>
      <label>
        <span>birth date</span>
        <input type="date" placeholder="birth date" v-model="birth" required/>
      </label>
      <input type="submit" @submit.prevent="">
    </form>
    <div v-if="submit">
      <p v-for="(value, name) in persData">
        {{name}}: {{value}}
      </p>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'Collection',
        data() {
            return {
                name: '',
                fName: '',
                age: 0,
                mail: '',
                phone: '',
                salary: 0,
                birth: '',
                submit: false,
                gender: 'female',
                persData: {}
            }
        },
        methods: {
            onSubmit() {
                this.persData = {
                    "Name": this.name,
                    "Family name": this.fName,
                    "age": this.age,
                    "mail": this.mail,
                    "phone": this.phone,
                    "average salary": this.salary,
                    "gender": this.gender,
                    "birth date": this.birth
                }
                this.submit = !this.submit
                console.log('>>>', this.persData);
            }
        }
    }
</script>

</

style

>
