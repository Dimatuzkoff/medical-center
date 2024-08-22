<script setup>
import { defineProps } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  size: {
    type: [String, Number],
    default: "24",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-if="icon === 'baners'">
      <path
        d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08331 8.33334C7.77367 8.33334 8.33331 7.77369 8.33331 7.08334C8.33331 6.39298 7.77367 5.83334 7.08331 5.83334C6.39296 5.83334 5.83331 6.39298 5.83331 7.08334C5.83331 7.77369 6.39296 8.33334 7.08331 8.33334Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 12.5L13.3334 8.33334L4.16669 17.5"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g v-if="icon === 'clients'">
      <path
        d="M13.3334 17.5V15.8333C13.3334 14.9493 12.9822 14.1014 12.357 13.4763C11.7319 12.8512 10.8841 12.5 10 12.5H5.00002C4.11597 12.5 3.26812 12.8512 2.643 13.4763C2.01788 14.1014 1.66669 14.9493 1.66669 15.8333V17.5"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50002 9.16667C9.34097 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34097 2.5 7.50002 2.5C5.65907 2.5 4.16669 3.99238 4.16669 5.83333C4.16669 7.67428 5.65907 9.16667 7.50002 9.16667Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8333 6.66667V11.6667"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 9.16667H13.3333"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g v-if="icon === 'employees'">
      <path
        d="M14.1666 17.5V15.8333C14.1666 14.9493 13.8155 14.1014 13.1903 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16665C3.28259 12.5 2.43474 12.8512 1.80962 13.4763C1.1845 14.1014 0.833313 14.9493 0.833313 15.8333V17.5"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50002 9.16667C9.34097 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34097 2.5 7.50002 2.5C5.65907 2.5 4.16669 3.99238 4.16669 5.83333C4.16669 7.67428 5.65907 9.16667 7.50002 9.16667Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.1667 17.5V15.8333C19.1661 15.0948 18.9203 14.3773 18.4678 13.7936C18.0153 13.2099 17.3818 12.793 16.6667 12.6083"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3333 2.60834C14.0503 2.79192 14.6858 3.20892 15.1397 3.7936C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57765 15.5935 7.29674 15.1397 7.88141C14.6858 8.46609 14.0503 8.88309 13.3333 9.06667"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g v-if="icon === 'exercises'">
      <path
        d="M6.2 5H3.8C3.35817 5 3 5.24873 3 5.55556V14.4444C3 14.7513 3.35817 15 3.8 15H6.2C6.64183 15 7 14.7513 7 14.4444V5.55556C7 5.24873 6.64183 5 6.2 5Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2 5H13.8C13.3582 5 13 5.24873 13 5.55556V14.4444C13 14.7513 13.3582 15 13.8 15H16.2C16.6418 15 17 14.7513 17 14.4444V5.55556C17 5.24873 16.6418 5 16.2 5Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.72729 10H12.2727"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3864 10H18.5227"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.47729 10H2.61366"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g v-if="icon === 'scaner'">
      <path
        d="M2.5 5.83333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H5.83333"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.1667 2.5H15.8334C16.2754 2.5 16.6993 2.67559 17.0119 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V5.83333"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 14.1667V15.8333C17.5 16.2754 17.3244 16.6993 17.0119 17.0118C16.6993 17.3244 16.2754 17.5 15.8334 17.5H14.1667"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V14.1667"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
  
 
  
  <style scoped>
svg {
  display: block;
}
</style>
  