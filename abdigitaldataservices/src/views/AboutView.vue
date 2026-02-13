<template>
  <div class="about">
    <div class="text-2xl font-medium text-white">About Us</div>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-green-900 p-6 shadow-lg outline outline-white/10 -outline-offset-1">
      <div class="ml-4 my-4">
        <p class="text-gray-100">AB Digital Data Services provides software development, data visualization and computer repair services to clients and customers in Calgary AB.</p>
      </div>
    </div>
    <div class="text-2xl font-medium text-white">Our Services</div>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-green-900 p-6 shadow-lg outline outline-white/10 -outline-offset-1">
      <div class="mx-4 my-4">
        <div class="text-lg">Our services include:</div>
        <ul class="ml-2">
          <li>Computer Repairs</li>
          <li>Data Recovery</li>
          <li>Contract Web Development</li>
          <li>Contract Software Development</li>
        </ul>
      </div>
    </div>
    <div class="text-2xl font-medium text-white">Our Rates</div>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-green-900 p-6 shadow-lg outline outline-white/10 -outline-offset-1">
      <div class="ml-4 my-4">
        <p class="text-gray-100">For computer repair services we charge a $25 base fee for diagnosis, and $20/hr afterward. If your computer problems are not resolved to your satisfaction, you will only be charged the base diagnosis fee.</p>
        <br/>
        <p class="text-gray-100">For web and software development, please contact us with your requirements and we can provide an estimate.</p>
      </div>
    </div>
    <div class="text-2xl font-medium text-white">Get In Touch</div>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-green-900 p-6 shadow-lg outline outline-white/10 -outline-offset-1">
      <div class="ml-4 my-4">
        <p class="text-gray-100">If any of our services are of interest to you, please drop us a line at <a href="mailto:andrew.smith@abdigitaldataservices.ca">andrew.smith@abdigitaldataservices.ca</a>. We are happy to help!</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
}
</style>
