import { useState } from "react";

import certificationsData from "../data/certificationsData";
import CertificationCard from "../components/certifications/CertificationCard";

export default function Certifications() {
  const [selectedCertification,
    setSelectedCertification] =
    useState(certificationsData[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">

      {/* Hero */}

      <div className="text-center mb-10 md:mb-16">

        <h1 className="text-4xl md:text-6xl font-bold">
          Certifications
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Certifications and professional learning
          experiences that strengthened my
          technical expertise.
        </p>

      </div>

      {/* Selector */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">

        {certificationsData.map((cert) => (

          <button
            key={cert.id}
            onClick={() =>
              setSelectedCertification(cert)
            }
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl border transition ${
              selectedCertification.id === cert.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {cert.title}
          </button>

        ))}

      </div>

      {/* Details */}

      <CertificationCard
        certification={selectedCertification}
      />

      {/* Certificate Preview */}

      <div className="border rounded-2xl md:rounded-3xl p-5 md:p-8 mt-6 md:mt-10">

        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Certificate Preview
        </h2>

        {selectedCertification.certificate ? (

          <div className="space-y-4">

            <iframe
              src={selectedCertification.certificate}
              title="Certificate Preview"
              className="
                w-full
                h-[350px]
                md:h-[800px]
                rounded-xl
                md:rounded-2xl
                border
              "
            />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

              <a
                href={selectedCertification.certificate}
                target="_blank"
                rel="noreferrer"
                className="
                  text-center
                  px-5
                  py-3
                  border
                  rounded-xl
                  text-sm
                  md:text-base
                  hover:bg-gray-100
                  transition
                "
              >
                Open PDF
              </a>

              <a
                href={selectedCertification.certificate}
                download
                className="
                  text-center
                  px-5
                  py-3
                  bg-black
                  text-white
                  rounded-xl
                  text-sm
                  md:text-base
                  hover:opacity-90
                  transition
                "
              >
                Download Certificate
              </a>

            </div>

          </div>

        ) : (

          <div className="h-[250px] md:h-[500px] border-2 border-dashed rounded-xl md:rounded-2xl flex items-center justify-center bg-gray-50">

            <div className="text-center">

              <div className="text-4xl md:text-5xl mb-4">
                📜
              </div>

              <h3 className="text-lg md:text-xl font-semibold">
                Certificate PDF Will Be Uploaded Soon
              </h3>

              <p className="text-sm md:text-base text-gray-500 mt-2">
                Reserved space for certificate preview.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}