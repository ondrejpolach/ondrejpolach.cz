<template>
  <v-container fluid fill-height class="career pa-0 d-flex">
    <v-container>
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between align-center mt-5 mb-4">
            <h2>{{ lang === 'CZ' ? "O nás" : "About us" }}</h2>
            <v-btn color="primary" class="mt-2 font-weight-bold" text @click="toggleLanguage">
              {{ lang }}
            </v-btn>
          </div>

          <div v-if="lang === 'EN'">
            <p>
              Hello developers! <br>
              I'd like to introduce you to a brand new opportunity that can change the way you think about software development. I am a freelance software engineer who builds cloud services directly for my clients. But wait, that's not all. I am part of a dynamic and innovative group of passionate developers, marketing specialists and web designers in the field of e-commerce and business.
              We strive to constantly improve the customer experience and the efficiency of our processes. My basic principle is to create long-term partnerships based on fairness and joint development.
              My goal is to bring not only quality software, but also a shift in thinking about development. I believe that success lies in synergy and cooperation. That's why I create projects that truly represent the needs and visions of my team and clients.<br><br>
              How do I do it? I manage my development processes with modern tools from Atlassian. Jira helps me with project management. I create the backend on Node.js, and as for the frontend, I rely on Vue or React. And where does it all go? On the cloud platform from Google. For me, Firebase and its great products over GCP have a special place in my toolkit.<br><br>
              So, are you ready for a new development experience? If so, let me know and together we'll create something truly amazing!
            </p>
            <h2 class="mt-9 mb-4">
              Our company culture
            </h2>
            <p>
              Our freelance developer community is like a creative nest full of energy and enthusiasm. Don't expect typical corporate airtight spaces here - here creativity spreads in the air. We are a team of independent individuals who can work together and combine their ideas to create something great.
              Flexibility is our hallmark. We don't have a fixed dress code - you can work in your favorite sweatshirt or set up your own "developer's corner" in the office. We take working hours as a challenge rather than a limiting rule - we like to measure our performance by results rather than hours spent on site.
              In short, we are a team of people who don't let themselves be pushed into traditional frameworks. We love challenges, experimentation, and most of all, the way our diverse ideas create something truly unique.
            </p>
          </div>
          <div v-else>
            <p>
              Ahoj vývojáři!<br>
              Rád bych ti představil neotřelou příležitost, která může změnit způsob, jakým vnímáš vývoj softwaru. Jsem softwarový inženýr na volné noze, který staví cloudové služby přímo na míru svým klientům. Ale počkej, to není všechno.
              Jsem součástí dynamické a inovativní skupiny zapálených vývojářů, marketingových specialistů a webových designerů v oblasti e-commerce a businessu.
              Snažíme se neustále zdokonalovat zákaznický zážitek a efektivitu našich procesů. Mým základním principem je vytvářet dlouhodobá partnerství založená na férovosti a společném rozvoji.
              Mým cílem je přinášet nejen kvalitní software, ale i posun v myšlení o vývoji. Věřím, že úspěch tkví v synergii a spolupráci. Proto vytvářím projekty, které skutečně reprezentují potřeby a vize mého týmu a klientů.<br><br>
              Jak to dělám? Moje vývojové procesy řídím moderními nástroji od Atlassianu. S projektovým řízením mi pomáhá Jira. Backend vytvářím na Node.js a co se frontendu týče, sázím na Vue nebo React. A kde to vše běží? Na cloudové platformě od Googlu. Zvláštní místo v mém toolkitu má pro mě Firebase a jeho skvělé produkty nad GCP.<br><br>
              Tak co, jsi připravený/á na nový vývojový zážitek? Když ano, dej mi vědět, a společně vytvoříme něco opravdu úžasného!
            </p>
            <h2 class="mt-9 mb-4">
              Naše kultura
            </h2>
            <p>
              Naše vývojářská komunita na volné noze je jako kreativní hnízdo plné energie a nadšení. U nás nečekej typické korporátní vzduchotěsné prostory - zde se kreativita šíří ve vzduchu. Jsme tým samostatných jednotlivců, kteří ale dokáží spolupracovat a spojit své myšlenky, aby vytvořili něco skvělého.
              Flexibilita je naší význačnou značkou. Nemáme pevně stanovený dress code - klidně můžeš pracovat ve své oblíbeném mikině nebo si v kanceláři postavit svůj vlastní "vývojářský koutek". Pracovní dobu bereme spíše jako výzvu než omezující pravidlo - rádi si měříme výkony podle výsledků spíše než podle hodin strávených na místě.
              Zkrátka řečeno, jsme tým lidí, kteří se nenechávají zahánět do tradičních rámců. Máme rádi výzvy, experimentování a hlavně způsob, jakým naše rozmanité myšlenky tvoří něco skutečně jedinečného.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="lang === 'EN'">
        <v-col>
          <v-card class="elevation-2 pa-5 mt-5">
            <v-card-title class="text-subtitle-1 mb-4">
              <h1>Backend or frontend developer</h1>
            </v-card-title>
            <v-card-text>
              <p>
                We are looking for a person with a passion for development to join us, support the development of our projects and share our ambitious goals.
              </p>
              <h3>Description:</h3>
              <p>
                The selected candidate will be able to contribute to one of the following projects:
              </p>

              <h4>Expanding <a href="https://ellity.eu" target="_blank">Ellity</a>:</h4>
              <p>
                Collaborate on the development of our main platform, which makes a significant impact on the world of e-commerce.
              </p>

              <h4>Creation of system modules:</h4>
              <p>
                Optimize the logistics and business processes of interesting companies by creating new system modules.
              </p>

              <h4>Migration and modification of e-shops:</h4>
              <p>
                Participate in migrations and modifications of e-shops for new and existing clients, ensure the competitiveness of our migration processes.
              </p>

              <h3>We require:</h3>
              <ul class="mb-4">
                <li>We are open to junior developers, but ideally 1-2 years of backend or frontend development experience</li>
                <li>Ability to work independently and in a team</li>
                <li>Knowledge of JavaScript and TypeScript</li>
                <li>Experience with modern development tools and technologies</li>
                <li>Good communication in Czech or English</li>
                <li>The possibility of cooperation as a self-employed person</li>
              </ul>

              <h3>What we offer:</h3>
              <ul class="mb-4">
                <li>Work on innovative projects with real impact</li>
                <li>Flexible working hours and partly remote cooperation</li>
                <li>Opportunity to grow and develop skills</li>
                <li>Supportive and friendly work environment</li>
                <li>Reward commensurate with your abilities</li>
                <li>Transport allowance - we like shared bikes :)</li>
              </ul>

              <h3>Location:</h3>
              <p>
                You can find us in the new offices in the center of Zlín, but we can agree on remote cooperation
              </p>

              <h3>Work load:</h3>
              <p>
                We expect a minimum of 20 hours per week
              </p>

              <p>
                If you have a passion for development and a desire to be involved in innovative projects, drop us a few lines about how you would strengthen our team strength.
                I look forward to your message and new ideas!
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-end mx-5 py-5">
              <v-btn href="mailto:ondra@ondrejpolach.cz?subject=Career" color="success">
                Join us
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-card class="elevation-2 pa-5 mt-5">
            <v-card-title class="text-subtitle-1 mb-4">
              <h1>Backend nebo frontend developer</h1>
            </v-card-title>
            <v-card-text>
              <p>
                Hledáme člověka s vášní pro vývoj, který se k nám připojí, podpoří vývoj našich projektů a podělí se o naše ambiciózní cíle.
              </p>
              <h3>Popis:</h3>
              <p>
                Zvolený kandidát bude moci přispět k jednomu z následujících projektů:
              </p>
              <h4>Rozšiřování  <a href="https://ellity.eu" target="_blank">Ellity</a>:</h4>
              <p>
                Spolupracujte na vývoji naší hlavní platformy, která výrazně zasahuje do světa e-commerce.
              </p>

              <h4>Tvorba systémových modulů:</h4>
              <p>
                Optimalizujte logistické a business procesy  zajímavých společností vytvořením nových systémových modulů.
              </p>

              <h4>Migrace a úprava e-shopů:</h4>
              <p>
                Podílejte se na migracích a úpravách e-shopů pro nové a stávající klienty, zajistěte konkurenceschopnost našich migračních procesů.
              </p>

              <h3>Požadujeme:</h3>
              <ul class="mb-4">
                <li>Jsme otevřeni juniorním vývojářům, ale ideálně 1-2 roky zkušeností s backendovým nebo frontendovým vývojem</li>
                <li>Schopnost práce samostatně i v týmu</li>
                <li>Znalost JavaScriptu a TypeScriptu</li>
                <li>Zkušenosti s moderními vývojovými nástroji a technologiemi</li>
                <li>Dobrá komunikace v češtině nebo angličtině</li>
                <li>Možnost spolupráce jako OSVČ</li>
              </ul>

              <h3>Nabízíme:</h3>
              <ul class="mb-4">
                <li>Práci na inovativních projektech s reálným dopadem</li>
                <li>Flexibilní pracovní doba a částečně vzdálená spolupráce</li>
                <li>Možnost růstu a rozvoje dovedností</li>
                <li>Podpůrné a přátelské pracovní prostředí</li>
                <li>Odměna odpovídající vašim schopnostem</li>
                <li>Příspěvek na dopravu - máme rádi sdílená kola :)</li>
              </ul>

              <h3>Lokace:</h3>
              <p>
                Najdete nás v nových kancelářích v centru Zlína, ale můžeme se dohodnout na vzdálené spolupráci
              </p>

              <h3>Pracovní vytížení:</h3>
              <p>
                Očekáváme minimálně 20 hodin týdně
              </p>

              <p>
                Pokud máte vášeň pro vývoj a chuť zapojit se do inovativních projektů, napište nám pár řádků o tom, jakým způsobem byste posílili naši týmovou sílu.
                Těším se na vaši zprávu a nové nápady!
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-end mx-5 py-5">
              <v-btn href="mailto:ondra@ondrejpolach.cz?subject=Kariera" color="success">
                Připoj se k nám
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      lang: 'CZ'
    }
  },
  head () {
    return {
      title: 'Career',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hledám člověka s nadšením pro rozvoj, který by se k nám přidal, podpořil rozvoj našich projektů a sdílel naše ambiciózní cíle'
        }
      ]
    }
  },
  methods: {
    toggleLanguage () {
      this.lang = this.lang === 'CZ' ? 'EN' : 'CZ'
    }
  }
}
</script>

<style>
.career {
background: #fff;
}
</style>
