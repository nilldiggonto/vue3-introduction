<template>
    <div>
       <div class="row d-flex justify-content-center">
           <div class="col-6">
               <div class="card">
                   <div class="card-header text-center">
                       <h4>SIGN UP FORM</h4>
                   </div>
                   <div class="card-body">
                                <form action="" @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <label for="email">Email address:</label>
                                    <input v-model="email" type="email" class="form-control" placeholder="Enter email" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Password:</label>
                                    <input v-model="password" type="password" class="form-control" placeholder="Enter password" id="pwd">
                                </div>

                                <div v-if="passwordError">
                                    <span class="badge rounded-pill bg-danger">{{passwordError}}</span>
                                </div>

                                <div class="form-group">
                                     <label for="sel1">Select list:</label>
                                    <select class="form-control" id="sel1" v-model="role">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4"> 4</option>
                                    </select>
                                </div>

                                    <div class="form-group">
                                    <label for="skills">Skills:</label>
                                    <input @keyup.alt="addSkill" v-model="tempSkill" type="text" class="form-control" placeholder="python,vue,js,ml" id="skills">


                                    </div>

                                    <div class="d-inline mt-4 mb-4"  v-for="skill in skills" :key="skill">
                                        <span  @click="deleteSkill(skill)" class="p-2 badge rounded-pill bg-primary">{{skill}} </span>
                                    </div>

                                  



                                <div class="form-group form-check">
                                    <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="terms"> Remember me
                                    </label>
                                </div>
 <!--
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="one" v-model="names">Option 1
                                    </label>
                                    </div>
                                    <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="two" v-model="names">Option 2
                                    </label>
                                    </div>
                                    <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="three" v-model="names">Option 3
                                    </label>
                                    </div> -->
                                <div class="d-grid gap-2 mt-2">
                                <button class="btn btn-sm btn-primary" type="submit">Create an account</button>
                                <!-- <button class="btn btn-lg btn-primary" type="button">Block button</button> -->
                                </div>
                            </form>
                   </div>
                   <div class="card-footer">
                       <p>Email: {{email}}</p>
                       <p>Password: {{password}}</p>
                       <p>What Number? : {{role}}</p>
                       <p>Remember me: {{terms}}</p>
                       <!-- <p>Names: {{names}}</p> -->
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            role:'',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
            // names: []
        }
    },
    methods: {
        addSkill(e){
            if (e.key === ',' && this.tempSkill){
                if (!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                // this.skills.push(this.tempSkill)
                this.tempSkill = ''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit(){
            this.passwordError = this.password.length > 5 ? '' : 'Passowrd must be at least 6 character'

            if (!this.passwordError){
                console.log('done')
            }
        }
    },
    
}
</script>