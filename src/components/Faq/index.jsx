import React,{useState} from 'react';
import {useTranslation} from 'react-i18next'
import {General,Price} from '../../components/constant/data';

function FAQ() {
  const {t} = useTranslation();
    // ---accordion--//
    const [accordion, setActiveAccordion] = useState(0);
    const [accordion2, setActiveAccordion2] = useState(0);

    function toggleAccordion(index) {
      if (index === accordion) {
        setActiveAccordion(-1);
        return
      }
      setActiveAccordion(index);
    };
    function toggleAccordion2(index) {
      if (index === accordion2) {
        setActiveAccordion2(-1);
        return
      }
      setActiveAccordion2(index);
    };
    // ----accordion---//
  return (
    <section className='w-[90%] md:w-[70%] lg:w-[50%] mx-auto pt-10'>
        <p className='text-center text-3xl  pb-5' data-aos="fade-right">Frequently asked questions</p>
        <div className='accordion__faq'>
            <h2 className='text-xl pb-3'>General</h2>
            {General.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion(index)} data-aos="fade-right">
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
        <div className='accordion__faq pt-10'>
            <h2 className='text-xl pb-3'>Pricing & Payment</h2>
            {Price.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion2(index)} data-aos="fade-right">
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion2 === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion2 === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion2 === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
      </section>
  )
}

export default FAQ