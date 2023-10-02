<script setup>
import { ref } from 'vue';
const error = ref(null)

const props = defineProps({
  formData: Object,
  nextStep: Function,
  prevStep: Function,
  prices: Object
})

const emit = defineEmits(['changePlan', 'togglePlan'])

function handlePlanSelect(name){
    error.value = null
    emit('changePlan', name)
}

function togglePlan(){
    error.value = null
    emit('togglePlan')
}

function handleSubmit(){
    if(props.formData.plan.planName == "")
        return error.value = "Please select a plan"
    else props.nextStep()
}
</script>

<template>
<div class="step-container">
  <h1 class="step-title">Select your plan</h1>
  <p class="step-description">You have the option of monthly or yearly billing.</p>

  <div class="step-content plan-content">
      <div class="plan-cards-wrapper">
          <div class="plan-card" :class="{active: props.formData.plan.planName == 'arcade' }"  @click="()=>handlePlanSelect('arcade')">
              <img class="plan-icon" src='/images/icon-arcade.svg'  alt="Plan icon"/>
              <div class="plan-info">
                  <h2 class="plan-title">Arcade</h2>
                  <p class="plan-price">${{props.formData.plan.isYearly ? props.prices.arcade*10 : props.prices.arcade}}/{{props.formData.plan.isYearly ? "yr" : "mo"}}</p>
                  <p v-if="props.formData.plan.isYearly" class="plan-bonus">2 months free</p>
              </div>
          </div>
          <div class="plan-card" :class="{active: props.formData.plan.planName == 'advanced' }" @click="()=>handlePlanSelect('advanced')">
              <img class="plan-icon" src='/images/icon-advanced.svg'  alt="Plan icon" />
              <div class="plan-info">
                  <h2 class="plan-title">Advanced</h2>
                  <p class="plan-price">${{props.formData.plan.isYearly ? props.prices.advanced*10 : props.prices.advanced}}/{{props.formData.plan.isYearly ? "yr" : "mo"}}</p>
                  <p v-if="props.formData.plan.isYearly" class="plan-bonus">2 months free</p>
              </div>
          </div>
          <div class="plan-card" :class="{active: props.formData.plan.planName == 'pro' }" @click="()=>handlePlanSelect('pro')">
              <img class="plan-icon" src='/images/icon-pro.svg' alt="Plan icon" />
              <div class="plan-info">
                  <h2 class="plan-title">Pro</h2>
                  <p class="plan-price">${{props.formData.plan.isYearly ? props.prices.pro*10 : props.prices.pro}}/{{props.formData.plan.isYearly ? "yr" : "mo"}}</p>
                  <p v-if="props.formData.plan.isYearly" class="plan-bonus">2 months free</p>
              </div>
          </div>
      </div>
      <p v-if="error" class="error">{{error}}</p>
      <div class="slider-wrapper">
          <p :class="{ active: props.formData.plan.isYearly }">Monthly</p>
          <div class="slider" @click="togglePlan">
              <div class="slider-circle" :class="{yearly :props.formData.plan.isYearly}"></div>
          </div>
          <p :class="{active: props.formData.plan.isYearly}">Yearly</p>
      </div>
  </div>
  <div class='step-buttons-container' >
      <button @click="props.prevStep" class='prev-step-btn'>Go back</button>
      <button @click="handleSubmit" class='next-step-btn'>Next Step</button>
  </div>
  </div>
</template>

