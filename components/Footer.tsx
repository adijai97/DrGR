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
              <img className={styles.iconLg} src="https://www.figma.com/api/mcp/asset/68448edf-b80b-4576-9c22-13b983199985" alt="Phone" />
              <img className={styles.iconSm} src="https://www.figma.com/api/mcp/asset/e31817c2-9bef-4acc-bcfa-0fbae25c2597" alt="Phone" />
              <span className={styles.footerContactText}>+91 94480 30490<span className={styles.msgOnly}>(message only)</span></span>
            </div>
            <div className={styles.footerContactItem}>
              <img className={styles.iconLg} src="https://www.figma.com/api/mcp/asset/31d5cf44-efb7-4df1-8264-01e5ab75df60" alt="Email" />
              <img className={styles.iconSm} src="https://www.figma.com/api/mcp/asset/5a6badff-cc63-48e9-aaa7-16258bddf32a" alt="Email" />
              <span className={styles.footerContactText}><a href="mailto:drgaurirokkam@gmail.com">drgaurirokkam@gmail.com</a></span>
            </div>
            <div className={styles.footerContactItem} style={{ alignItems: "flex-start" }}>
              <img className={styles.iconLg} src="https://www.figma.com/api/mcp/asset/334a8f5f-f123-4e8d-a465-8025b89a2e9f" alt="Location" style={{ marginTop: 2 }} />
              <img className={styles.iconSm} src="https://www.figma.com/api/mcp/asset/49da8b3d-9c48-4724-b78e-70de17f55940" alt="Location" style={{ marginTop: 2 }} />
              <span className={styles.footerContactAddress}>
                Maitri, No. 650, 4th Cross Rd,<br />
                3rd Block, Koramangala,<br />
                Bengaluru 560034, India
              </span>
            </div>
            <div className={styles.footerSocialRow}>
              <img className={styles.socialIconLg} src="https://www.figma.com/api/mcp/asset/c805910a-7620-4beb-86c3-40c6c45bcbe3" alt="WhatsApp" />
              <img className={styles.socialIconLg} src="https://www.figma.com/api/mcp/asset/a87ae5f1-5aa3-421b-b70b-ff9c3aab0b3a" alt="Instagram" />
              <img className={styles.socialIconLg} src="https://www.figma.com/api/mcp/asset/b5638e70-f28e-4406-89f0-a362da6d7d00" alt="YouTube" />
              <img className={styles.socialIconLg} src="https://www.figma.com/api/mcp/asset/7d239def-46bc-4d26-8259-faf5f9bfc762" alt="Facebook" />
              <img className={styles.socialIconLg} src="https://www.figma.com/api/mcp/asset/adccb618-2e43-4953-85cd-8688fbb048b8" alt="LinkedIn" />
              <div className={styles.socialIconCircle}><img src="https://www.figma.com/api/mcp/asset/b3d8e0b1-7baa-4008-af6c-b727faaa8d9f" alt="Instagram" /></div>
              <div className={styles.socialIconCircle}><img src="https://www.figma.com/api/mcp/asset/da65cfec-af05-4bd2-84ec-234240768c4c" alt="YouTube" /></div>
              <div className={styles.socialIconCircle}><img src="https://www.figma.com/api/mcp/asset/7a62c563-9dd4-4fe0-b13b-f0d28feafe0d" alt="Facebook" /></div>
              <div className={styles.socialIconCircle}><img src="https://www.figma.com/api/mcp/asset/fb8363ed-c31c-4e46-9da4-66ae3c9c80bf" alt="LinkedIn" /></div>
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
            <img src="https://www.figma.com/api/mcp/asset/7976136e-d492-4d97-860d-898e3cf09107" alt="Dr. Gauri Rokkam" style={{ height: 58 }} />
          </div>
          <p className={styles.footerCopy}>© 2025 Dr. Gauri Rokkam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
