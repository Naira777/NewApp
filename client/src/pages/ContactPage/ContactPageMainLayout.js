import { useEffect, useRef, useState } from "react";
import axios from "axios";
import s from "./index.module.css";
import { useTranslation } from "react-i18next";
import MainLayout from "../../MainLayout";

export default function ContactPageMainLayout() {
  const { t } = useTranslation();
  const ref_name = useRef(null);
  const ref_email = useRef(null);
  const ref_sub = useRef(null);
  const ref_mess = useRef(null);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    if (name && email && subject && message) {
      const values = { name, email, subject, message };
      try {
        await axios.post("http://localhost:5000/send", values, {
          headers: { "Content-Type": "application/json" },
        });

        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      } catch (err) {
        console.log(err);
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      }
    } else {
      if (name == "") {
        ref_name.current.style.border = "1px solid rgb(198, 82, 82)";
      }
      if (email == "") {
        ref_email.current.style.border = "1px solid rgb(198, 82, 82)";
      }
      if (subject == "") {
        ref_sub.current.style.border = "1px solid rgb(198, 82, 82)";
      }
      if (message == "") {
        ref_mess.current.style.border = "1px solid rgb(198, 82, 82)";
      }
    }
  };

  useEffect(() => {
    if (name !== "") {
      ref_name.current.style.border = "1px solid rgb(184, 184, 184)";
    }
    if (email !== "") {
      ref_email.current.style.border = "1px solid rgb(184, 184, 184)";
    }
    if (subject !== "") {
      ref_sub.current.style.border = "1px solid rgb(184, 184, 184)";
    }
    if (message !== "") {
      ref_mess.current.style.border = "1px solid rgb(184, 184, 184)";
    }
  }, [name, email, subject, message]);

  return (
    <MainLayout>
    <div  className={s.container}>
      <p className={s.header1}>{t("contactus")}</p>

      <div className={s.boxAll}>
        <div className={s.box}>
          <p className={s.text}>{t("name")}*</p>
          <input
            ref={ref_name}
            className={s.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={s.box}>
          <p className={s.text}>{t("email")}*</p>
          <input
            ref={ref_email}
            className={s.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={s.box}>
          <p className={s.text}>{t("subject")}*</p>
          <input
            ref={ref_sub}
            className={s.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className={s.box}>
          <p className={s.text}>{t("message")}* </p>
          <input
            ref={ref_mess}
            className={s.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <button onClick={onSubmit} className={s.button}>
        {t("send")}
      </button>
    </div>
    </MainLayout>
  );
}
