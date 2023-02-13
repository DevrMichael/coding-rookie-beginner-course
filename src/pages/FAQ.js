import React, { useState } from "react";
import faqs from "../faqs";

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = i => {
    if (openFaq === i){
        return setOpenFaq(null);
    }

    setOpenFaq(i)
  };

  return (
    <div className="page summary">
      <h1>Frequently Asked Questions</h1>
      <p className="faq__info-text">Here are the most common question people who want to become a self-taught developer ask.</p>
      {faqs.map((faq, i) => (
        <div onClick={() => toggleFaq(i)}>
          <div>
            <h2>{faq.question} {openFaq === i ? '-' : '+'}</h2>
            {openFaq === i && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
        <footer>
        <h1 className="navBtns">Coding Rookie</h1>
        <h2 className="navBtns">Terms & Conditions</h2>
      </footer>
    </div>
  );
}

export default FAQ;
