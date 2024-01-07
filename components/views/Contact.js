import html from "html-literal";
export default () => html`
  <main>
    <div class="contactSelectorBoxes">
      <div class="contactSelectorBoxes" id="contactappExplanation">
        Digimeets is a virtual business, please reach out to us through the
        contact us box below
      </div>
      <div class="contactSelectorBoxes" id="contactForm">
        <h2>Contact Us</h2>
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/{form_id}"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              required=""
            />
            <label for="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />
            <label for="message">Games or features to add, etc</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
          </fieldset>
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    </div>
  </main>
`;
