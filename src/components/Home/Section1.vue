<template>
  <div class="intro d-flex justify-content-center">
      <b-container class="header-container context justify-content-center">
        <div class="pb-5 d-flex flex-column align-items-center">
          <h1 class="header animate__animated animate__fadeIn animate__slower pb-3">Gauntlet Development & Design</h1>
          <h2 class="plug animate__animated animate__fadeIn animate__delay-1s animate__slower">Responsive, Scalable Web
            Applications</h2>
          <div class="py-5 welcome animate__animated animate__fadeIn animate__delay-2s animate__slower">
            Welcome to Gauntlet Designs. We design, build, and host custom websites and enterprise grade applications to
            fit your needs. Be that a small family owned business, or a enterprise looking to expand. We are a female
            owned business located in the DC Metro Area. Our products are clean, light, responsive and fully
            customizable to meet your business needs.
          </div>
          <BorderButton
              class="contact-button mt-4 animate__animated animate__fadeIn animate__delay-3s animate__slower"
                        text="Learn More" linkName="services"/>
        </div>
      </b-container>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BorderButton from '@/components/Buttons/BorderButton';

export default {
  name: 'Section1',
  components: {BorderButton, Navbar},
};
</script>

<style scoped lang="scss">
.intro {
  position: relative;
}

.header-container {
  padding-bottom: 10vh;
  padding-top: 100px;
  text-align: center;
}

.header-container .welcome {
  max-width: 800px;
}

.header {
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 10px;
  color: #eceff1;
  font-family: 'Montserrat', sans-serif;
}

.welcome {
  color: #d6d9dc;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}

.plug {
  color: #36a3cb;
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  letter-spacing: 5px;
}

//animation
.context {
  position: absolute;
}

.contact-button {
  z-index: 999;
}

.area {
  background: #161617;
  background: -webkit-linear-gradient(to left, #7da1b4, #4e5c7c);
  width: 100%;
  min-height: calc(100vh - 113px);
}

.circles {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(45, 66, 93, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}


@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
