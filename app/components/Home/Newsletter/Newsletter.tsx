import { useState } from "react";
import { Form } from "react-bootstrap";

const { Check, Control } = Form;

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", email);
  };
  return (
    <form onSubmit={onSubmit} className="text-center">
      <Control
        className="mb-4"
        type="email"
        placeholder="Podaj email"
        style={{ border: "none" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <Check
        type="checkbox"
        id="newsletter-check"
        label="Akceptuję warunki newslettera"
        className="my-2 d-inline-block"
      />

      <br />

      <button type="submit" style={{ marginTop: "5rem" }}>
        Zapisz się
      </button>
    </form>
  );
};

export default Newsletter;
