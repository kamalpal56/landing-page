// src/components/Disclaimer.jsx
import React from "react";

const Disclaimer = () => {
  return (
    <section className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600 leading-relaxed space-y-4">
        <p>
          The content of this website is not aimed at individuals residing in Belgium,
          nor is it intended for dissemination to, or utilization by, any individual
          in any country or jurisdiction where such dissemination or usage would
          violate local laws or regulations.
        </p>

        <p>
          <strong>Risk warning:</strong> The information on the website is not targeted
          to any country or jurisdiction where such distribution or use would be contrary
          to local law or regulation. Admirals SC Ltd (Registration Number 8426894-1 ) has
          the necessary license and approval to operate under the brand “Admirals”.
          “Admirals SC Ltd or Admirals" where for the purpose of this website reference to
          either shall constitute actions of Admirals SC Ltd. Admirals SC Ltd is licensed
          by the Financial Services Authority of Seychelles (FSA) as a Securities Dealer in
          Seychelles under license number SD073.
        </p>

        <p>
          The information contained in this website is general information only and does not
          take into account your objectives, financial situation or needs. The content of this
          website must not be construed as personal advice. Before deciding to invest in any
          products or services offered by Admirals we recommend you seek independent advice and
          ensure you fully understand the risks involved before trading and carefully consider
          your objectives, financial situation, needs, and level of experience. Before you decide
          whether or not to pursue any products or services referred to in this website it’s
          important for you to read and consider the relevant Terms of Business.
        </p>

        <p>
          Admirals is not liable for any loss or damage, including without limitation, any loss
          of profit, which may arise directly or indirectly from the use of or reliance such
          information.
        </p>

        <p>
          Trading foreign exchange carries a high level of risk, and may not be suitable for all
          investors. The high degree of leverage available can magnify profits and as well as
          losses. You can lose more than your initial deposit. Before trading, please carefully
          consider the risks and inherent costs and seek independent advice as required. There are
          also risks associated with online trading including, but not limited to, hardware and/or
          software failures, and disruptions to communication systems and internet connectivity.
          Admirals utilises numerous backup systems and procedures to minimise such risks and reduce
          the duration and severity of any disruptions and failures. Admirals is not liable for any
          loss or damage, including without limitation, any loss of profit, which may arise directly
          or indirectly as a result of failures, disruptions or delays.
        </p>

        <p>
          <strong>Address:</strong> Suite 202, Second Floor, Waterside Property, Eden Island,
          Mahé, Seychelles with a right to operate under the name Admirals as Franchisee.
        </p>

        <p>
          All payments related to the Paysafe Group are facilitated by Pemax Services Ltd,
          number HE 320715, registered at Dramas 2 Floor, Nicosia, Cyprus acting as a payment
          agent of Admirals SC Ltd.
        </p>

        <p>
          Card transactions are processed by our business partner, Pemax Services Ltd
          (Registration No. HE 320715), whose registered and business office address is
          situated at Archiepiskopou Makariou III, 88, Floor 1, 1077, Nicosia, Cyprus.
        </p>

        {/* Privacy Policy link aligned right */}
        <div className="flex justify-end mt-8">
          <a
            href="/privacy-policy"
            className="font-semibold text-gray-700 hover:text-blue-600"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
