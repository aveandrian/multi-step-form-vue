<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const emit = defineEmits(['selectAddon'])
const  props = defineProps({
  formData: Object,
  nextStep: Function,
  prevStep: Function,
  prices: Object
})
</script>

<template>
  <div class="step-container">
    <h1 class="step-title">Pick add-ons</h1>
    <p class="step-description">Add-ons help enhance your gaming experience.</p>

    <div class="step-content addons-content">
      <div class="addon-item" :class="{selected: props.formData.addons.service}" @click="emit('selectAddon', 'service')">
        <div class="addon-selector" :class="{selected: props.formData.addons.service}" >
          <FontAwesomeIcon  icon="fa-solid fa-check" class="check-icon"/>
        </div>
        <div class="addon-description">
          <p class="addon-title">Online service</p>
          <p class="addon-text">Access to multiplayer games</p>    
        </div>  
        <p class="addon-price">+${{props.formData.plan.isYearly ? props.prices.service*10 + '/yr' : props.prices.service + '/mo'}}</p>          
      </div>
      <div class="addon-item" :class="{selected: props.formData.addons.storage}" @click="emit('selectAddon', 'storage')">
        <div class="addon-selector" :class="{selected: props.formData.addons.storage}">
          <FontAwesomeIcon  icon="fa-solid fa-check" class="check-icon"/>
        </div>
        <div class="addon-description">
          <p class="addon-title">Larger storage</p>
          <p class="addon-text">Extra 1TB of cloud save</p>    
        </div>  
        <p class="addon-price">+${{props.formData.plan.isYearly ? props.prices.storage*10 + '/yr' : props.prices.storage + '/mo'}}</p>          
      </div>
      <div class="addon-item" :class="{selected: props.formData.addons.customProfile}" @click="emit('selectAddon', 'customProfile')">
        <div  class="addon-selector" :class="{selected: props.formData.addons.customProfile}">
          <FontAwesomeIcon  icon="fa-solid fa-check" class="check-icon"/>
        </div>
        <div class="addon-description">
          <p class="addon-title">Customizable Profile</p>
          <p class="addon-text">Custom theme on your profile</p>    
        </div>  
        <p class="addon-price">+${{props.formData.plan.isYearly ? props.prices.customProfile*10 + '/yr' : props.prices.customProfile + '/mo'}}</p>          
      </div>
    </div>
    <div class='step-buttons-container' >
        <button @click="props.prevStep" class='prev-step-btn'>Go back</button>
        <button @click="props.nextStep" class='next-step-btn'>Next Step</button>
    </div>
  </div>
</template>
