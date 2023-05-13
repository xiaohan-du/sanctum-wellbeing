import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          COMING SOON...
        </p>
        <div>
          <a
            href="https://sanctumwellbeing.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LOGO
          </a>
        </div>
      </div>
      <div className={styles.center}>
        SANCTUM WELLBEING
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.aor.org.uk/what-is-reflexology/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Reflexology <span>-&gt;</span>
          </h2>
          <p>Find More</p>
        </a>

        <a
          href="https://www.onsitemassageco.com/blog/reflexology-can-improve-physical-mental-wellbeing/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Wellbeing <span>-&gt;</span>
          </h2>
          <p>Find More</p>
        </a>

        <a
          href="https://www.aor.org.uk/custom/far-search/map.php?lat=51.483707&lng=-3.1680962&country=GB&location=Cardiff%2C+UK&name=Louise+"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Assiciation of Reflexologists Verified <span>-&gt;</span>
          </h2>
          <p>Find More</p>
        </a>

        <a
          href="https://search.cnhcregister.org.uk/search?name=+louise+davies&therapy=14&radius=&city=cardiff&postcode=&g-recaptcha-response=03AL8dmw8RSKXDxpdAFH6QSK3lrPckmB9OWoMof2tqsZBnRY33vmKC5WHAW92uAGw8dNGRuTmRbUIlNgVfhPUACwTzFQhdCyie9W4i4BuuBhtYyzHiZkWOznbCHIqiVuSTJRsIobR-EsR5ys6AP_WAVXoPV9WDpQoLKtgqzno8mnmtF0e50ukxGufYztLW6hfN4j6S8tHM3_8HuiPDzMprswvp3TFFm4LsYiKCju_8fym252wejFaRFee7mvkzxlpZWcJh7vygVM7IsMTwkwSrdDUj1mmt_5Kk6TCEflAHM6upySD1NDyPXLr2SioZfsKukMlOEjaKHL2hdliUXnowOPac1vlZR8U95FKrQsHtOEKWSrX6KgsqeqPnjZmZEFWut3hylTCyZjHZINIFu-SF1X-y32nX911WJb6GEyzrz6wnINgjGxFulhmRM7yQDuPQUmqM_02Jf73rh6lHW77ldpEaN0TVs6i2qTJaNq7Oxf6x0DSjKOdMlHhHbuT3pznBXdeIOgHotGqj_t4yAvqjKhUEIGC-PC-IeZzw6Rj-f541wwZoooSPSJUXRdajwOtpi-WkeCWfUli7sJDZrTQ-1cMQ8mXE1ABn1YxnIRVxQ1aD_dzNFoyeo1efcR1wZG-XCx-R6pp-1edQ"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CNHC Verified <span>-&gt;</span>
          </h2>
          <p>
            Find More
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://xiaohan-du.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website built by Xiaohan Du
        </a>
      </div>
    </main>
  )
}
