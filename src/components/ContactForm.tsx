"use client";

export function ContactForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
