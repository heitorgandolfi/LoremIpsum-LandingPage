import styles from './main.module.css';
import { MainText } from "./MainText";
import { Button } from "../Button/";
import { Info } from "./Info";
import MainImg from '../../img/mainImg.png';
import SecondImg from '../../img/scnImg.png';
import ThirdImg from '../../img/thrImg.png';
import { GiSwordsPower, GiExplodingPlanet, GiDrakkarDragon, GiEnrage, GiDwarfFace, GiAllSeeingEye, GiCavalry } from 'react-icons/gi';
import { MinorInfo } from "./MinorInfo";
import { Cards } from "./Cards";
import { Input } from '../Input';

export const Main = () => {
  return (
    <main>
      <section className={styles.firstSection}>
        <article>
          <MainText
            mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            secondaryText="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla. Integer sit amet dictum lacus, a venenatis neque. Proin eu tincidunt lectus, nec viverra arcu."
          />
          <Button
            btnText="Get started for free"
          />
        </article>

        <aside>
          <img src={MainImg} alt="Ilustração de pessoas em volta de uma tela de computador" />
        </aside>
      </section>

      <section className={styles.secondSection}>
        <h1>Lorem ipsum</h1>
        <article>
          <Info
            icon={<GiEnrage />}
            title="Lorem ipsum"
            content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla. Integer sit amet dictum lacus, a venenatis neque. Proin eu tincidunt lectus, nec viverra arcu."
          />

          <Info
            icon={<GiSwordsPower />}
            title="Lorem ipsum"
            content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla. Integer sit amet dictum lacus, a venenatis neque. Proin eu tincidunt lectus, nec viverra arcu."
          />

          <Info
            icon={<GiDrakkarDragon />}
            title="Lorem ipsum"
            content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla. Integer sit amet dictum lacus, a venenatis neque. Proin eu tincidunt lectus, nec viverra arcu."
          />
        </article>
      </section>

      <section className={styles.thirdSection}>
        <aside>
          <img src={SecondImg} alt="Homem interagindo com dashboards" />
        </aside>

        <article>
          <MainText
            mainText="Lorem ipsum dolor sit amet"
            secondaryText="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
          />

          <div>
            <MinorInfo
              icon={<GiExplodingPlanet />}
              title="Lorem ipsum dolor sit amet"
              content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
            />

            <MinorInfo
              icon={<GiDwarfFace />}
              title="Lorem ipsum dolor sit amet"
              content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
            />
          </div>
        </article>
      </section>

      <section className={styles.fourthSection}>
        <MainText
          mainText="Lorem ipsum dolor sit amet"
          secondaryText="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
        />

        <div className={styles.cardContainer}>
          <Cards
            plan="Starter"
            planPrice="$ 20/mo"
            infos={[
              "Up to 10 comic book/mo",
              "10 team members",
              "$30 /comic book report"
            ]}
          />

          <Cards
            plan="Regular"
            planPrice="$ 99/mo"
            infos={[
              "Up to 20 comic book/mo",
              "20 team members",
              "$35 /comic book report"
            ]}
          />

          <Cards
            plan="Plus"
            planPrice="$ 229/mo"
            infos={[
              "Up to 50 comic book/mo",
              "50 team members",
              "$60 /comic book report"
            ]}
          />

          <Cards
            plan="Enterprise"
            planPrice="$ 429/mo"
            infos={[
              "Unlimited comic book/mo",
              "Unlimited team members",
              "$150 /comic book report"
            ]}
          />
        </div>
      </section>

      <section className={styles.fifthSection}>
        <article>
          <MainText
            mainText="Lorem ipsum dolor sit amet"
            secondaryText="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
          />

          <div>
            <MinorInfo
              icon={<GiAllSeeingEye />}
              title="Lorem ipsum dolor sit amet"
              content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
            />

            <MinorInfo
              icon={<GiCavalry />}
              title="Lorem ipsum dolor sit amet"
              content="Quisque blandit, elit in consequat porta, mi libero efficitur quam, ac aliquam orci turpis id nulla."
            />
          </div>
        </article>
        <aside>
          <img src={ThirdImg} alt="MUDAR DEPOISSSSSSSSSSSSSS" />
        </aside>
      </section>

      <section className={styles.sixthSection}>
        <MainText
          mainText="Download the software"
          secondaryText="Quisque blandit, elit in consequat porta."
        />

        <div>
          <Input
            id="inputEmail"
            type="email"
            name="Email"
            placeholder="Email Address"
            btnText="Get started for free"
          />
        </div>
      </section>
    </main >
  )
}