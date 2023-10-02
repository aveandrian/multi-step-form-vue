<script setup>
import { ref } from 'vue';

const props = defineProps({
  formData: Object,
  nextStep: Function
})

const error = ref({
    name: null,
    email: null,
    phone: null
})

function handleSubmit(){
  let personalInfo = props.formData.personalInfo
  let errorTemp = {
      name: null,
      email: null,
      phone: null
  }
  if(personalInfo.name == "")
      errorTemp.name='This field is required'
  if(personalInfo.email == "")
      errorTemp.email='This field is required'
  if(personalInfo.phone == "")
      errorTemp.phone='This field is required'
  if(personalInfo.email != "" && !validateEmail(personalInfo.email))
      errorTemp.email = 'Please fill in correct email'
  if(errorTemp.name || errorTemp.email || errorTemp.phone){
      return error.value = errorTemp
  }
  else
      props.nextStep()
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

</script>

<template>
  <div class="step-container">
    <h1 class="step-title">Personal info</h1>
    <p class="step-description">Please provide your name, email address, and phone number.</p>

    <div class="step-content personal-info-content">
      <div class='input-wrapper'>
        <div class="input-label-container">
          <label htmlFor="name">Name</label>
          <p v-if="error.name" class="error">{{error.name}}</p>

        </div>
        <input :class="{ 'input-error': error.name }" name="name" type="text" v-model="props.formData.personalInfo.name" placeholder="e.g. Stephen King" />
      </div>
      <div class="input-wrapper">
        <div class="input-label-container">
          <label htmlFor="email">Email Address</label>
          <p v-if="error.email" class="error">{{error.email}}</p>
        </div>
          <input :class="{ 'input-error': error.email }" name="email" type="email" v-model="props.formData.personalInfo.email" placeholder="e.g. stephenking@lorem.com"/>
      </div>
      <div class="input-wrapper">
        <div class="input-label-container">
            <label>Phone Number</label>
            <p v-if="error.phone" class="error">{{error.phone}}</p>
        </div>
        <input :class="{ 'input-error': error.phone }" name="phone" type="phone" v-model="props.formData.personalInfo.phone" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
    <div class='step-buttons-container'>
      <button @click="handleSubmit" class='next-step-btn'>Next Step</button>
    </div>
  </div>
</template>
