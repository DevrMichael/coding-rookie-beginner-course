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
      {faqs.map((faq, i) => (
        <div onClick={() => toggleFaq(i)}>
          <div>
            <h1>{faq.question}</h1>
            {openFaq === i && <h2>{faq.answer}</h2>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
