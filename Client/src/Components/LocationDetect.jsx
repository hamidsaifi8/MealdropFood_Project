import { useState } from "react";
import { MapPin, X, XCircle } from "lucide-react";
import { useLocationContext } from "../Context/LocationContext";

const LocationDetect = () => {
  const { location, setLocation } = useLocationContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [manualInput, setManualInput] = useState("");

  const detectLocation = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          console.log("Location Data:", data.address);

          setLocation({
            locality:
              data.address.industrial ||
              data.address.subdivision ||
              data.address.suburb ||
              data.address.neighbourhood ||
              data.address.road ||
              "",
            city: data.address.city ||
              data.address.town ||
              data.address.village ||
              "Unknown",
            state: data.address.state || "",
            country: data.address.country || "",
          });

          setShowModal(false);
        } catch {
          setError("Failed to get location");
        }
        setLoading(false);
      },
      () => {
        setError("Location access denied");
        setLoading(false);
      }
    );
  };

  const handleManualLocation = () => {
    if (!manualInput.trim()) return;
    const [locality, city, state = "", country = ""] = manualInput
      .split(",")
      .map((p) => p.trim());
    setLocation({ locality, city, state, country });
    setManualInput("");
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center text-pink-700 px-4 py-2 gap-1 bg-gray-50 rounded-l-full hover:scale-102 shadow-sm transition-all duration-300 hover:text-pink-700 hover:shadow-md"
      >
        <MapPin className="w-4 h-4" />
        <h2>
          {location && (location.locality || location.city)
            ? `${location.locality ? `${location.locality}, ` : ''}${location.city}`
            : "Set Location"}
        </h2>
    
      </button>

      {error && (
        <div className="bg-red-500 text-white text-center py-2 flex justify-center items-center gap-2">
          <XCircle className="w-4 h-4" /> {error}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 z-[999] transition-opacity scroll-smooth">
          <div className="bg-white p-8 sm:p-8 rounded-lg w-full max-w-sm shadow-xl animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Set Your Location</h2>
              <X
                className="w-5 h-5 cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>

            <button
              onClick={detectLocation}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-3"
            >
              {loading ? "Detecting..." : "Auto Detect Location"}
            </button>

            <input
              type="text"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleManualLocation()}
              placeholder="Area, City, State, Country"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={handleManualLocation}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationDetect;
