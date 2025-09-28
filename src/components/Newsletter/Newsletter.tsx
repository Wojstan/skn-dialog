import { FormEvent, useState } from "react";

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

const [applicationSubmited, setApplicationSubmited] = useState(false);

  const email = formData.get('EMAIL')?.toString() || '';
  const consent = formData.get('OPT_IN') ? 'Tak' : '';

  const url = 'https://docs.google.com/forms/d/e/1FAIpQLSf6HZC7-W5mehVveff741m3pn3Ar_iMBjVpdX-8vhXKUXG8GQ/formResponse';

  const data = new URLSearchParams();
  data.append('entry.95344110', email);         // e-mail
  data.append('entry.1966869942', consent);     // zgoda

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    });

    setApplicationSubmited(true);
    setTimeout(() => setApplicationSubmited(false), 5000);
  } catch (error) {
    setApplicationSubmited(true);
    setTimeout(() => setApplicationSubmited(false), 5000);
  }

  e.currentTarget.reset();
};
