import styles from "./shared.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogoRow}>
          <p className={styles.footerTagline}>Health is not a destination. It is a practice.</p>
        </div>

        <div className={styles.footerCols}>
          {/* Contact */}
          <div className={styles.footerCol}>
            <p className={styles.footerColLabel}>CONTACT</p>
            <div className={styles.footerContactItem}>
              <img className={styles.iconLg} src="/images/icons/phone.svg" alt="Phone" />
              <img className={styles.iconSm} src="/images/icons/phone.svg" alt="Phone" />
              <span className={styles.footerContactText}>+91 94480 30490<span className={styles.msgOnly}>(message only)</span></span>
            </div>
            <div className={styles.footerContactItem}>
              <img className={styles.iconLg} src="/images/icons/email.svg" alt="Email" />
              <img className={styles.iconSm} src="/images/icons/email.svg" alt="Email" />
              <span className={styles.footerContactText}><a href="mailto:drgaurirokkam@gmail.com">drgaurirokkam@gmail.com</a></span>
            </div>
            <div className={styles.footerContactItem} style={{ alignItems: "flex-start" }}>
              <img className={styles.iconLg} src="/images/icons/location.svg" alt="Location" style={{ marginTop: 2 }} />
              <img className={styles.iconSm} src="/images/icons/location.svg" alt="Location" style={{ marginTop: 2 }} />
              <span className={styles.footerContactAddress}>
                Maitri, No. 650, 4th Cross Rd,<br />
                3rd Block, Koramangala,<br />
                Bengaluru 560034, India
              </span>
            </div>
            <div className={styles.footerSocialRow}>
              <img className={styles.socialIconLg} src="/images/icons/whatsapp.svg" alt="WhatsApp" />
              <img className={styles.socialIconLg} src="/images/icons/instagram.svg" alt="Instagram" />
              <img className={styles.socialIconLg} src="/images/icons/youtube.svg" alt="YouTube" />
              <img className={styles.socialIconLg} src="/images/icons/facebook.svg" alt="Facebook" />
              <img className={styles.socialIconLg} src="/images/icons/linkedin.svg" alt="LinkedIn" />
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <p className={styles.footerColLabel}>SERVICES</p>
            <div className={styles.footerServicesList}>
              <p>Book a Consultation</p>
              <p>Take the Course</p>
              <p>Buy the Book</p>
              <p>Read Articles</p>
              <p>Apprenticeship</p>
            </div>
          </div>

          {/* Queries */}
          <div className={styles.footerCol}>
            <p className={styles.footerColLabel}>QUERIES</p>
            <div className={styles.footerForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Name</label>
                  <input type="text" className={styles.formInput} placeholder="Enter Name.." />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Email</label>
                  <input type="email" className={styles.formInput} placeholder="Enter Email.." />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Query</label>
                <textarea className={styles.formTextarea} placeholder="Your Query.."></textarea>
              </div>
              <button className={styles.btnSubmit}>Submit</button>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider}></div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLogo}>
            <img src="/Logo 300x300 (1) 1.png" alt="Dr. Gauri Rokkam" style={{ height: 58 }} />
          </div>
          <p className={styles.footerCopy}>© 2025 Dr. Gauri Rokkam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
