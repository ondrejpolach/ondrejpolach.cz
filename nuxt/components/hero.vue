<template>
  <v-container fluid fill-height class="hero">
    <v-row no-gutters class="fill-height">
      <v-col class="hero-back">
        <div
          class="d-flex flex-column justify-space-between justify-sm-end fill-height"
        >
          <div class="my-sm-auto my-10">
            <div>
              <span
                class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 white--text"
              >My name is
                <span
                  class="primary--text"
                >Ondřej Polách</span></span>
            </div>
            <div>
              <span
                class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 typewrite white--text"
                data-period="500"
                data-type="simply the bes,simply the web developer,backend developer,frontend developer,full-stack developer"
              >
                <span
                  class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 wrap"
                />
              </span>
            </div>
          </div>
          <div
            class="d-sm-flex justify-space-between justify-lg-start mb-2"
          >
            <span
              :class="
                available
                  ? 'd-flex align-center text-subtitle-2 text-md-h6 mr-lg-15 mb-5 mb-sm-0 green--text'
                  : 'd-flex align-center text-subtitle-2 text-md-h6 mr-lg-15 mb-5 mb-sm-0 red--text'
              "
            ><v-icon
              class="mr-2"
              :color="available ? 'green' : 'red'"
            >mdi-checkbox-blank-circle</v-icon>{{ availableText }}</span>
            <a
              class="d-flex align-center text-subtitle-2 text-md-h6 mr-lg-15 mb-5 mb-sm-0 text-decoration-none"
              href="mailto:ondra@ondrejpolach.cz?subject=Hire"
              color="primary"
            ><v-icon
              class="mr-2"
              color="primary"
            >mdi-email</v-icon>
              ondra@ondrejpolach.cz</a>
            <a
              class="d-flex align-center text-subtitle-2 text-md-h6 text-decoration-none"
              href="tel:+420721736053"
              color="primary"
            ><v-icon
              class="mr-2"
              color="primary"
            >mdi-phone</v-icon>
              +420 721 736 053</a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Hero',

  data () {
    return {
      available: true,

      rotateTexts: [],
      rotateElement: null,
      loopNum: 0,
      period: 2000,
      txt: '',
      isDeleting: false
    }
  },

  computed: {
    availableText () {
      return this.available ? 'at your service' : 'busy, in touch'
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      const element = document.getElementsByClassName('typewrite')[0]
      this.rotateElement = element
      this.rotateTexts = element.getAttribute('data-type').split(',')
      this.period =
                parseInt(element.getAttribute('data-period'), 10) || 2000
      this.rotateText()

      setTimeout(() => {
        document.getElementsByClassName('hero')[0].classList.add('active')
      })
    },
    rotateText () {
      const i = this.loopNum % this.rotateTexts.length
      const fullTxt = this.rotateTexts[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.rotateElement.innerHTML = `<span class="prewrap">I am&nbsp;</span><span class="wrap">${this.txt}</span>`

      let delta
      if (this.isDeleting) {
        delta = 100 - Math.random() * 100
      } else {
        delta = 200 - Math.random() * 100
      }

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      } else if (this.isDeleting && i === 0 && this.txt === 'simply the ') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(() => {
        this.rotateText()
      }, delta)
    }
  }
}
</script>

<style >
.hero {
    position: relative;
    background-image: url("~/assets/background.png");
    background-repeat: repeat;
    padding: 0;
    opacity: 0;
    transition: opacity .5s ease-in-out;
}

.hero.active {
    opacity: 1;
}

.hero-back {
    background-image: url("~/assets/hero.png");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: cover;
    height: 100%;
    margin-left: 15px;
}

a:hover {
    opacity: 0.7;
}

@media screen and (min-width: 600px) {
    .hero-back {
        background-size: contain;
    }
}

@media screen and (min-width: 960px) {
    .hero-back {
        margin-left:50px;
    }
}
</style>
