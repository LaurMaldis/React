import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // refreshi takistamiseks juhul kui mul on HTMLs form tag

    emailjs.sendForm('service_2ao7z2h', 'template_dsiunqg', form.current, 'ZWfxK-nAmTMnPzcg3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="user_name" /><br />
      <label>Email</label><br />
      <input type="email" name="user_email" /><br />
      <label>Message</label>
      <br />
      <textarea name="message" /><br />
      <input type="submit" value="Saada" />
    </form>
  );
};