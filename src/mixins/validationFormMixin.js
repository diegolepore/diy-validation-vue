import validateEmail from '../helpers/validateEmail'

const validationFormMixin = {
  data() {
    return {
      errorsList: []
    }
  },
  methods: {
    validateForm() {
      this.errorsList = [];
  
      if(('name' in this.formData) && !this.formData.name) {
        this.addError('The Name is required')
      } 
      
      if( ('email' in this.formData) && !this.formData.email) {
        this.addError('The Email is required')
      } else if(!validateEmail(this.formData.email)) {
        this.addError('Please enter a valid email')
      }
      
      if(('password' in this.formData) && !this.formData.password) {
        this.addError('The Password is required')
      } else if(this.formData.password.length < 6) {
        this.addError('Password must have at least 6 characters')
      }
      
      if(this.errorsList.length === 0) {
        return true
      } 
    },

    addError(errorStr) {
      this.errorsList.push(errorStr)
    },
  }
}

export default validationFormMixin