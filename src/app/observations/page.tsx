import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";

const ObservationsPage = async () => {
  const { getBirdObservations } = await import("./actions");
  const observations = await getBirdObservations();

  return (
    <div className="p-4 flex flex-1 justify-center h-full overflow-hidden bg-gray-100">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Vi kigger på fugle
        </h1>
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">
                  Fuglens art
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">
                  Lokation
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-600 font-semibold">
                  Fuglens alder
                </th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              {observations.map((observation) => (
                <tr key={observation.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-left">
                    {observation.birdName}
                  </td>
                  <td className="py-3 px-4 border-b text-left">
                    <Link
                      href={`https://www.google.com/maps?q=${observation.latitude},${observation.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {observation.latitude}, {observation.longitude}
                    </Link>
                  </td>
                  <td className="py-3 px-4 border-b text-left">
                    {observation.age === "adult" ? "Voksen" : "Ungfugl"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ObservationsPage;
