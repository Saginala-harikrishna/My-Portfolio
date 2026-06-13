import { useState } from "react";

import certificationsData from "../data/certificationsData";
import CertificationCard from "../components/certifications/CertificationCard";

export default function Certifications() {
  const [selectedCertification,
    setSelectedCertification] =
    useState(certificationsData[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Certifications
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Certifications and professional learning
          experiences that strengthened my
          technical expertise.
        </p>

      </div>

      {/* Selector */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {certificationsData.map((cert) => (

          <button
            key={cert.id}
            onClick={() =>
              setSelectedCertification(cert)
            }
            className={`px-6 py-3 rounded-xl border transition ${
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

      <div className="border rounded-3xl p-8 mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Certificate Preview
        </h2>
        {selectedCertification.certificate ? (

  <div className="space-y-4">

    <iframe
      src={selectedCertification.certificate}
      title="Certificate Preview"
      className="w-full h-[800px] rounded-2xl border"
    />

    <div className="flex gap-4">

      <a
        href={selectedCertification.certificate}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
      >
        Open PDF
      </a>

      <a
        href={selectedCertification.certificate}
        download
        className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
      >
        Download Certificate
      </a>

    </div>

  </div>

) : (

  <div className="h-[500px] border-2 border-dashed rounded-2xl flex items-center justify-center bg-gray-50">

    <div className="text-center">

      <div className="text-5xl mb-4">
        📜
      </div>

      <h3 className="text-xl font-semibold">
        Certificate PDF Will Be Uploaded Soon
      </h3>

      <p className="text-gray-500 mt-2">
        Reserved space for certificate preview.
      </p>

    </div>

  </div>

)}



          </div>

    </div>
  );
}