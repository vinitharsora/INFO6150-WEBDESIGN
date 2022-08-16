import React from 'react';
import ContactUsCard2 from '../Layout/ContactUsCard2';

const Contact = () => {

  const contantData = [{
    img: "https://publichealth.jhu.edu/sites/default/files/styles/social_image/public/2022-01/bidens-infrastructure-bill-gettyimages-602333830.jpeg?itok=_ja1pVj0",
    name: "Infrastructure",
    number: "(857)-467-8760",
    email: "infrastructure@careerpath.com"
  },
  {
    img: "https://image.shutterstock.com/image-photo/spreadsheet-bank-accounts-accounting-calculator-260nw-551213116.jpg",
    name: "Accounts",
    number: "(857)-567-6789",
    email: "accounts@careerpath.com"
  },
  {
    img: "https://www.siemplify.co/wp-content/uploads/2019/06/shutterstock_569172169.jpg",
    name: "Operations",
    number: "(617)-657-1239",
    email: "operations@careerpath.com"
  },
  {
    img: "https://opensourcedworkplace.com/wp-content/uploads/2021/08/802618151news_Screenshot_2021_05_07_201318.png",
    name: "Human Resources",
    number: "(617)-098-1490",
    email: "hr@careerpath.com"
  }];

  return (
    <div className="component">
      <h3>Contact Us</h3>
      <p>You can reach out to domains you are interested in</p>
      <ContactUsCard2 data={contantData}/>
    </div>
  )
}

export default Contact;