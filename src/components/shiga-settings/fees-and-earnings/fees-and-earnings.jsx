import React, { useState } from "react";

const FeesAndEarnings = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedValue((prevValue) => (prevValue === value ? null : value));
  };

  return (
    <div className="w-full">
      <div>
        <h3 className="text-3xl font-bold">Fees & Earnings</h3>
      </div>
      <div className="mx-16">
        <div className="flex justify-between py-4 border-b">
          <p>Business Notifications</p>
          <div>
            <label
              htmlFor="business-email-checkbox"
              className="flex items-center cursor-pointer py-1"
            >
              <input
                id="business-email-checkbox"
                type="checkbox"
                checked={selectedValue === "radio11"}
                onChange={() => handleCheckboxChange("radio11")}
                className="hidden"
              />
              <div
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  selectedValue === "radio11"
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedValue === "radio11" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              Send to the business email address only
            </label>
            <label
              htmlFor="another-checkbox"
              className="flex items-center cursor-pointer py-1"
            >
              <input
                id="another-checkbox"
                type="checkbox"
                checked={selectedValue === "radio12"}
                onChange={() => handleCheckboxChange("radio12")}
                className="hidden"
              />
              <div
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  selectedValue === "radio12"
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedValue === "radio12" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              Send to all dashboard users
            </label>
          </div>
        </div>

        <div className="flex justify-between py-4 border-b">
          <div>
            <p>Business earning</p>
            <p>How do you want to get your earnings?</p>
          </div>
          <div>
            <label
              htmlFor="settle-checkbox"
              className="flex items-center cursor-pointer py-1"
            >
              <input
                id="settle-checkbox"
                type="checkbox"
                checked={selectedValue === "radio21"}
                onChange={() => handleCheckboxChange("radio21")}
                className="hidden"
              />
              <div
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  selectedValue === "radio21"
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedValue === "radio21" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              Settle to my bank account
            </label>

            <label
            htmlFor="settle-checkbox"
            className="flex items-center cursor-pointer py-1"
          >
            <input
              id="settle-checkbox"
              type="checkbox"
              checked={selectedValue === "radio22"}
              onChange={() => handleCheckboxChange("radio22")}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                selectedValue === "radio22"
                  ? "bg-indigo-500 border-indigo-500"
                  : "border-gray-400"
              }`}
            >
              {selectedValue === "radio22" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
                Send to my payout balance
          </label>
          </div>
        </div>

        <div className="flex justify-between py-4 border-b">
          <div>
            <p>Business earning</p>
            <p>How do you want to get your earnings?</p>
          </div>
          <div>
            <label
              htmlFor="settle-checkbox"
              className="flex items-center cursor-pointer py-1"
            >
              <input
                id="settle-checkbox"
                type="checkbox"
                checked={selectedValue === "radio21"}
                onChange={() => handleCheckboxChange("radio21")}
                className="hidden"
              />
              <div
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  selectedValue === "radio21"
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedValue === "radio21" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              Settle to my bank account
            </label>

            <label
            htmlFor="settle-checkbox"
            className="flex items-center cursor-pointer py-1"
          >
            <input
              id="settle-checkbox"
              type="checkbox"
              checked={selectedValue === "radio22"}
              onChange={() => handleCheckboxChange("radio22")}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                selectedValue === "radio22"
                  ? "bg-indigo-500 border-indigo-500"
                  : "border-gray-400"
              }`}
            >
              {selectedValue === "radio22" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
                Send to my payout balance
          </label>
          </div>
        </div>

        <div className="flex justify-between py-4 border-b">
          <div>
            <p>Business earning</p>
            <p>How do you want to get your earnings?</p>
          </div>
          <div>
            <label
              htmlFor="settle-checkbox"
              className="flex items-center cursor-pointer py-1"
            >
              <input
                id="settle-checkbox"
                type="checkbox"
                checked={selectedValue === "radio21"}
                onChange={() => handleCheckboxChange("radio21")}
                className="hidden"
              />
              <div
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  selectedValue === "radio21"
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-gray-400"
                }`}
              >
                {selectedValue === "radio21" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              Settle to my bank account
            </label>

            <label
            htmlFor="settle-checkbox"
            className="flex items-center cursor-pointer py-1"
          >
            <input
              id="settle-checkbox"
              type="checkbox"
              checked={selectedValue === "radio22"}
              onChange={() => handleCheckboxChange("radio22")}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                selectedValue === "radio22"
                  ? "bg-indigo-500 border-indigo-500"
                  : "border-gray-400"
              }`}
            >
              {selectedValue === "radio22" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
                Send to my payout balance
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesAndEarnings;