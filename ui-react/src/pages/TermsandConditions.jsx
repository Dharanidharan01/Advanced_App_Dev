import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Public/Footer';
import Header from '../components/Public/Header';

const TermsAndConditions = () => {
  return (
    <div className="">
      <Header/> 
      <h1 className="mb-8 ml-1 text-3xl font-bold mb-8 mt-20">Terms and Conditions</h1>

      <div className="mb-8 ml-5">
        <h2 className="text-xl font-semibold mb-4">Purpose</h2>
        <p>Jobpilot.com is intended only to serve as a preliminary medium of contact and exchange of information for its users / members / visitors who have a bona fide intention to contact and/or be contacted for the purposes related to genuine existing job vacancies and for other career enhancement services.</p>
      </div>

      <div className="mb-8 ml-5">
        <h2 className="text-xl font-semibold mb-4">Use to be in Conformity with the Purpose</h2>
        <p>Jobpilot.com (and related products) or service or product that is subscribe to or used (whether the same is paid for by you or not) is meant for the Purpose and only the exclusive use of the subscriber/registered user. Copying or downloading or recreating or sharing passwords or sublicensing or sharing in any manner which is not in accordance with these terms, is a misuse of the platform or service or product and IEIL reserves its rights to act in such manner as to protect its loss of revenue or reputation or claim damages including stopping your service or access and reporting to relevant authorities. In the event you are found to be copying or misusing or transmitting or crawling any data or photographs or graphics or any information available on Jobpilot.com for any purpose other than that being a bonafide Purpose, we reserve the right to take such action that we deem fit including stopping access and claiming damages.</p>
      </div>

      <div className="mb-8 ml-5">
        <h2 className="text-xl font-semibold mb-4">Liability</h2>
        <p>The site is a public site with free access and Info Edge assumes no liability for the quality and genuineness of responses. Info Edge (India) Ltd. cannot monitor the responses that a person may receive in response to information he/she has displayed on the site. The individual/company would have to conduct its own background checks on the bonafide nature of all response(s).</p>
      </div>

      <div className="mb-8 ml-5">
        <h2 className="text-xl font-semibold mb-4">Data Usage</h2>
        <p>You give us permission to use the information about actions that you have taken on Jobpilot.com in connection with ads, offers and other content (whether sponsored or not) that we display across our services, without any compensation to you. We use data and information about you to make relevant suggestions and recommendation to you and others.</p>
      </div>

      {/* Add more sections as needed */}

      <Footer/>
    </div>
  );
};

export default TermsAndConditions;
