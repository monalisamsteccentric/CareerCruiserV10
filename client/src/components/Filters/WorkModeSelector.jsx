import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWorkModeOption } from "../../Features/workModeSlice";

const workModeOptions = [
  { id: "Onsite", name: "Onsite" },
  { id: "Hybrid", name: "Hybrid" },
  { id: "Remote", name: "Remote" },
];

function WorkModeSelector() {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(
    (state) => state.workMode.selectedOptions
  );

  const handleOptionToggle = (optionId) => {
    dispatch(toggleWorkModeOption(optionId));
  };

  return (
    <div className="p-1">
      {workModeOptions.map((option) => (
        <div key={option.id}>
          <input
            type="checkbox"
            id={option.id}
            name={option.name}
            value={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleOptionToggle(option.id)}
          />
          <label  className="text-sm" htmlFor={option.id}>{option.name}</label>
        </div>
      ))}
    </div>
  );
}

export default WorkModeSelector;
