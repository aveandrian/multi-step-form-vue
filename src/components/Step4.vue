<script setup>
const props = defineProps({
  formData: Object,
  nextStep: Function,
  prevStep: Function,
  planMonthlyPrices: Object,
  addonMonthlyPrices: Object,
  total: Number
})

const emit = defineEmits(['changeStep'])
</script>

<template>
  <div class="step-container">
    <h1 class="step-title">Finishing up</h1>
    <p class="step-description">Double-check everything looks OK before confirming.</p>
    
    <div class="step-content summary-content">
      <div class="summary-wrapper">
        <div class="summary-subscription">
          <div class="summary-subscription-description">
            <p class="summary-subscription-title">{{props.formData.plan.planName}} ({{props.formData.plan.isYearly ? 'Yearly' : 'Monthly' }})</p>
            <p class="summary-subscription-change" @click="emit('changeStep', 2)">Change</p>
          </div>
          <p class="summary-subscription-price">${{props.formData.plan.isYearly ? props.planMonthlyPrices[props.formData.plan.planName]*10 + '/yr' : props.planMonthlyPrices[props.formData.plan.planName] + '/mo' }}</p>
        </div>
        <div class="summary-divider"></div>
        <div class="summary-addons">
          <div v-if="props.formData.addons.service" class="summary-addon-wrapper">
            <p class="summary-addon-title">Online service</p>
            <p class="summary-addon-price">+${{props.formData.plan.isYearly ? `${props.addonMonthlyPrices.service*10}/yr` :  `${props.addonMonthlyPrices.service}/mo` }}</p>
          </div>
          <div v-if="props.formData.addons.storage" class="summary-addon-wrapper">
            <p class="summary-addon-title">Larger storage</p>
            <p class="summary-addon-price">+${{props.formData.plan.isYearly ? `${props.addonMonthlyPrices.storage*10}/yr` :  `${props.addonMonthlyPrices.storage}/mo` }}</p>
          </div>
          <div v-if="props.formData.addons.customProfile" class="summary-addon-wrapper">
            <p class="summary-addon-title">Customizable profile</p>
            <p class="summary-addon-price">+${{props.formData.plan.isYearly ? `${props.addonMonthlyPrices.customProfile*10}/yr` :  `${props.addonMonthlyPrices.customProfile}/mo` }}</p>
          </div>
        </div>
      </div>
      <div class="total">
          <p class="total-title">Total ({{props.formData.plan.isYearly ? 'per year' : 'per month'}})</p>
          <p class="total-price">+${{props.total}}/{{props.formData.plan.isYearly ? 'yr' : 'mo' }}</p>
      </div>
    </div>
    <div class='step-buttons-container' >
        <button @click="props.prevStep" class='prev-step-btn'>Go back</button>
        <button @click="props.nextStep" class='next-step-btn confirm'>Confirm</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
