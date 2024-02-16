import React from "react";

interface TermsAndConditionsProps {
  // Add your component's props here
}

const UserTermsAndConditions: React.FC = () => {
  // Add your component logic here
  return (
    <div
      className="terms-container"
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h2>User Terms and Conditions:</h2>
      <br />
      <p>
        Welcome to Finding Floridians! These Terms and Conditions govern your
        use of our platform as a “User” who connects with listings and
        authorizes the release of your contact information to be text messaged,
        emailed and called by Finding Floridians. By using our platform, you
        agree to comply with and be bound by these Terms and Conditions.
      </p>
      <h4>1. User Consent:</h4>
      <p>
        a. By using our platform and providing your contact information,
        including but not limited to your name, phone number, and email address,
        you expressly consent to Finding Floridians contacting you via email,
        text messages and phone calls for the purpose of assisting you with your
        search for listings or related services.
      </p>
      <p>
        {" "}
        b. You have the option to unsubscribe or opt-out of such communications
        at any time by contacting us directly or following the instructions
        provided within the text messages and emails you receive.
      </p>
      <h4>2. Privacy and Data Protection:</h4>
      <p>
        a. We value and prioritize your privacy. Please refer to our Privacy
        Policy, which outlines how we collect, use, disclose, and protect your
        personal information. b. We will not sell or share your contact
        information with any third parties, except as described in our Privacy
        Policy or as required by law.
      </p>
      <h4>3. User Obligations:</h4>
      <p>
        a. Users are required to provide accurate and up-to-date contact
        information during the registration process. b. Users must comply with
        all applicable laws and regulations related to telecommunications and
        privacy and refrain from using our platform to engage in any illegal or
        unauthorized activities. c.Users understand and acknowledge that they
        are solely responsible for any communications or interactions they
        initiate with other users or listings through our platform.
      </p>
      <h4>4. Disclaimer of Warranties:</h4>
      <p>
        a. We strive to provide a reliable and efficient platform; however, we
        do not warrant the availability, accuracy, or reliability of the
        listings or the responsiveness of the contact form. Users rely on the
        information and services provided at their own risk. b. Finding
        Floridians disclaims any liability for the actions, omissions, or
        misconduct of any users or listings featured on our platform.
      </p>

      <h4>5. Limitation of Liability:</h4>
      <p>
        a. Finding Floridians shall not be held liable for any direct, indirect,
        incidental, special, or consequential damages arising out of or relating
        to your use of our platform or any communication initiated through our
        platform.
      </p>
      <p>
        b. In no event shall our liability exceed the total fees paid by the
        User, if any, for using our platform.
      </p>

      <h4> 6. Modification and Termination:</h4>

      <p>
        {" "}
        a. We reserve the right to modify, suspend, or terminate the
        availability of our platform, services, or these Terms and Conditions,
        in whole or in part, at any time without prior notice.
      </p>

      <br />
      <br />

      <p>
        By using our platform, you acknowledge that you have read, understood,
        and agreed to these Terms and Conditions. If you do not agree to these
        terms, please refrain from using our platform.
      </p>
      <p>
        These Terms and Conditions are governed by and construed in accordance
        with the laws of the state of Florida. Any disputes arising from or
        related to these Terms and Conditions shall be subject to the exclusive
        jurisdiction of the courts in the state of Florida.
      </p>
      <p>
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact us at info@findingfloridians.com.
      </p>

      <p> Last updated: 02/07/2024</p>
    </div>
  );
};

export default UserTermsAndConditions;
