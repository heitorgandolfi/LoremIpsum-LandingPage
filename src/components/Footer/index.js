import { Topics } from "./Topics"
import styles from './footer.module.css'
import { SocialMedia } from "./SocialMedia"
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialTwitterCircular } from 'react-icons/ti'

export const Footer = () => {
  return (
    <footer>
      <section className={styles.footer}>
        <Topics
          topicName="Features"
          topics={[
            "Maecenas euple",
            "Placerat anteser ren",
            "Fusce utneque",
            "Justot aliquet enim"
          ]}
        />

        <Topics
          topicName="Resoucers"
          topics={[
            "Pricing",
            "How it Works",
            "Watch a Demo",
            "What People Say"
          ]}
        />

        <Topics
          topicName="Company"
          topics={[
            "Maecenas euple",
            "Placerat anteser ren",
            "Fusce utneque",
            "Justot aliquet enim"
          ]}
        />

        <Topics
          topicName="Solutions"
          topics={[
            "Support",
            "FAQs",
            "Privacy Policy",
            "Terms & Conditions"
          ]}
        />


        <Topics
          topicName="Contact Us"
          topics={[
            "example@example.com",
            "888-123-4567"
          ]}
        />
      </section>

      <SocialMedia
        text="All Rights Reserved &copy; | Heitor Gandolfi | 2022 "
        socialLinks={[
          <TiSocialFacebookCircular />,
          <TiSocialTwitterCircular />,
          <TiSocialLinkedinCircular />
        ]}

      />

    </footer >
  )
}