import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLocationOption } from "../../Features/locationSlice";

const locationOptions = [
  { id: "Delhi", name: "Delhi" },
  { id: "Mumbai", name: "Mumbai" },
  { id: "Kolkata", name: "Kolkata" },
  { id: "Pune", name: "Pune" },
  { id: "Chennai", name: "Chennai" },
  { id: "Ahmedabad", name: "Ahmedabad" },
  { id: "Bangalore", name: "Bangalore" },
  { id: "Hyderabad", name: "Hyderabad" },
];

function LocationSelector() {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(
    (state) => state.location.selectedOptions
  );

  const handleOptionToggle = (optionId) => {
    dispatch(toggleLocationOption(optionId));
  };

  return (
    <div className="p-1">
      {locationOptions.map((option) => (
        <div key={option.id}>
          <input
            type="checkbox"
            id={option.id}
            name={option.name}
            value={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleOptionToggle(option.id)}
          />
          <label className="text-sm" htmlFor={option.id}>{option.name}</label>
        </div>
      ))}
    </div>
  );
}

export default LocationSelector;
