const ContactForm = () => {
  return (
    <form id="contact-form" action="">
      <fieldset id="contact-fieldset">
        <div className="flex flex-col gap-2">
          <label htmlFor="test" className="text-lg font-semibold">
            Label Test
          </label>
          <input
            type="text"
            name="test"
            id="test"
            placeholder="Test Placeholder"
            className="input-contact"
            required={true}
          />
        </div>
      </fieldset>
    </form>
  );
};

export default ContactForm;
