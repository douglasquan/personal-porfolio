"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Link from "next/link";

interface IContactProps {}

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 }
  }
};
const socials = [
  {
    link: "https://github.com/douglasquan",
    label: "GitHub",
    Icon: SiGithub
  },
  {
    link: "https://linkedin.com/in/douglasquan",
    label: "LinkedIn",
    Icon: SiLinkedin
  },
  {
    link: "https://www.instagram.com/quan.douglas/",
    label: "Instagram",
    Icon: SiInstagram
  }
];

const Contact: React.FC<IContactProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "50%", once: true });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_p4l01yg",
        "template_06jytmy",
        formRef.current,
        "8b0TJT2niUUpktCEd"
      )
      .then(
        (result) => setSuccess(true),
        (error) => setError(true)
      );
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto gap-4 md:gap-12 p-4 md:p-12 min-h-screen"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-8xl font-bold"
          variants={variants}
        >
          Let’s <span className="text-secondary">Connect!</span>
        </motion.h1>
        <motion.div variants={variants}>
          <h2 className="text-secondary text-xl md:text-2xl">Mail:</h2>
          <span className="text-xl font-bold">
            douglas.quan@mail.utoronto.ca
          </span>
        </motion.div>
        {/* <motion.div variants={variants}>
          <h2 className="text-secondary text-xl md:text-2xl">Address:</h2>
          <span className="text-xl font-bold">
            1003 5162 Yonge Street, Toronto, Ontario, Canada
          </span>
        </motion.div> */}
        <motion.div variants={variants}>
          <h2 className="text-secondary text-xl md:text-2xl">Phone:</h2>
          <span className="text-xl font-bold">+1 437 351 1092</span>
        </motion.div>
        <motion.div
          className="flex justify-center md:justify-start items-center gap-3"
          variants={variants}
        >
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon className="text-accent w-12 h-5 scale-[2] hover:scale-[2.25] transition-all" />
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="flex-1 relative">
        <motion.div
          className="w-full h-full absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 1 }}
          initial={{ opacity: 1 }}
          // whileInView={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0 : 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="phone"
          >
            <path
              // strokeWidth={0.2}
              // fill="none"
              // initial={{ pathLength: 0 }}
              // animate={isInView && { pathLength: 1 }}
              // transition={{ duration: 1 }}
              d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z"
            ></path>
            <path
              // strokeWidth={0.2}
              // fill="none"
              // initial={{ pathLength: 0 }}
              // animate={isInView && { pathLength: 1 }}
              // transition={{ duration: 1 }}
              d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z"
            ></path>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          style={{ zIndex: 20 }}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 p-5 md:p-8 rounded-lg "
          initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ delay: 4, duration: 1 }}

          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <input
            type="text"
            required
            style={{ zIndex: 20 }}
            placeholder="Name"
            name="name"
            className="p-5 bg-transparent border border-primary text-primary rounded-md"
          />
          <input
            type="email"
            required
            style={{ zIndex: 20 }}
            placeholder="Email"
            name="email"
            className="p-5 bg-transparent border border-primary text-primary rounded-md"
          />
          <textarea
            rows={8}
            style={{ zIndex: 20 }}
            placeholder="Message"
            name="message"
            className="p-5 bg-transparent border border-primary text-primary rounded-md"
          />
          <button
            style={{ zIndex: 20 }}
            className="p-5 bg-accent rounded-md text-light font-semibold cursor-pointer"
          >
            Submit
          </button>
          {error && <div className="text-red-500">Error</div>}
          {success && (
            <div className="text-green-500">
              Your message is successfully sent!
            </div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
