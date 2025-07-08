import React from "react";
import Header from "./Header";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed font-sans pt-[80px]">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 text-center mb-10">
          Last updated: {today}
        </p>

        <p className="mb-6">
          At <strong>Instrek Technologies</strong>, we value your trust. As a
          next-generation technology solutions provider working across AI, IoT,
          Blockchain, AR/VR, and Digital Transformation, data security and user
          privacy are core to how we operate. This Privacy Policy outlines how
          we collect, use, and protect your personal data when you interact with
          our website or services.
        </p>

        <Section title="1. Information We Collect">
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              company name — collected only when you contact us via forms,
              email, or partnerships.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device ID, and operating system — automatically collected for
              analytics and system performance.
            </li>
            <li>
              <strong>Interaction Data:</strong> Website usage patterns, session
              behavior, and page interactions — used for improving UX and
              functionality.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc list-inside">
            <li>Respond to inquiries or business collaboration requests</li>
            <li>Improve our platforms, interfaces, and backend systems</li>
            <li>Monitor and secure our infrastructure</li>
            <li>
              Analyze traffic and optimize content using aggregate analytics
            </li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <p className="mt-2">
            We do not use your data for unsolicited marketing or advertising.
          </p>
        </Section>

        <Section title="3. Data Sharing">
          <ul className="list-disc list-inside">
            <li>
              With secure service providers (e.g., cloud, analytics tools) under
              strict confidentiality
            </li>
            <li>
              In response to lawful government requests or regulatory compliance
            </li>
            <li>To detect, prevent, or address technical or security issues</li>
          </ul>
        </Section>

        <Section title="4. Security">
          <p>
            As a company building digital ecosystems for tomorrow, we embed
            robust cybersecurity protocols in every layer of our systems:
          </p>
          <ul className="list-disc list-inside">
            <li>Encrypted data transmission</li>
            <li>Role-based access controls</li>
            <li>Secure cloud infrastructure</li>
            <li>Regular threat monitoring and audits</li>
          </ul>
        </Section>

        <Section title="5. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent or limit processing</li>
            <li>Request data portability</li>
            <li>Raise concerns with a data protection authority</li>
          </ul>
          <p className="mt-2">
            Reach out to us anytime at{" "}
            <a
              href="mailto:connect@instrek.com"
              className="text-blue-600 underline"
            >
              connect@instrek.com
            </a>{" "}
            to exercise your rights.
          </p>
        </Section>

        <Section title="6. Cookies & Tracking">
          <p>
            We use minimal, essential cookies for functionality and performance
            analytics. You can disable cookies in your browser settings, though
            this may affect user experience.
          </p>
        </Section>

        <Section title="7. External Links">
          <p>
            Some areas of our website may link to external sites. Instrek is not
            responsible for their content or privacy practices.
          </p>
        </Section>

        <Section title="8. Policy Updates">
          <p>
            We may update this policy as our technologies evolve or in response
            to legal requirements. The latest version will always be available
            on this page with the effective date.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>For questions or data requests, contact:</p>
          <address className="not-italic mt-2">
            <strong>Instrek Technologies</strong>
            <br />
            912, SuryaKiran Building, KG Marg,
            <br />
            Connaught Place, Delhi – 110001
            <br />
            Email:{" "}
            <a
              href="mailto:connect@instrek.com"
              className="text-blue-600 underline"
            >
              connect@instrek.com
            </a>
          </address>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      {children}
    </section>
  );
}
