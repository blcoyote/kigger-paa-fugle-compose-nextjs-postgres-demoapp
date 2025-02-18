"use client";
import { useEffect, useState } from "react";
import { handleFormSubmit } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getCurrentLocation } from "@/lib/location";

const AddObservationPage = () => {
  interface ObservationData {
    birdName: string;
    latitude: string;
    longitude: string;
    age: "adult" | "young";
  }

  const [formData, setFormData] = useState<ObservationData>({
    birdName: "",
    latitude: "",
    longitude: "",
    age: "adult",
  });

  interface ResponseData {
    success: boolean;
    formData?: ObservationData;
    error?: unknown;
  }

  const [response, setResponse] = useState<ResponseData | null>(null);

  const location = getCurrentLocation();
  useEffect(() => {
    location.then((loc) => {
      if (loc) {
        setFormData((prevData) => ({
          ...prevData,
          latitude: loc.latitude.toString(),
          longitude: loc.longitude.toString(),
        }));
      }
    });
  }, [location]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleFormSubmit(formData);
    setResponse(result);
  };

  return (
    <div className="flex flex-col items-center overflow-hidden min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Så du en fugl?</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <Label>Hvad var det for en?</Label>
          <Input
            type="text"
            name="birdName"
            value={formData.birdName}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <Label>Længdegrad:</Label>
          <Input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <Label>Breddegrad:</Label>
          <Input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <Label>Alder:</Label>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full mt-1"
          >
            <option value="young">Ungfugl</option>
            <option value="adult">Voksen</option>
          </select>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Send
        </Button>
      </form>
      {response && (
        <div className="mt-4">
          {response.success ? (
            <p className="text-green-500">Du har fået pip!</p>
          ) : (
            <p className="text-red-500">
              Error:{" "}
              {response.error instanceof Error
                ? response.error.message
                : "Unknown error"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddObservationPage;
