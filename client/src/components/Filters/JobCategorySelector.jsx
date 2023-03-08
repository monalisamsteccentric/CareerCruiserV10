import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobCategoryOption } from "../../Features/jobCategorySlice";

const jobCategories = [
  { id: "Front End Engineers", name: "Front End Engineers" },
  { id: "Backend Engineers", name: "Backend Engineers" },
  { id: "Full-Stack Engineers", name: "Full-Stack Engineers" },
  { id: "Mobile Engineers", name: "Mobile Engineers" },
  { id: "Data Engineers", name: "Data Engineers" },
  { id: "Machine Learning Engineers", name: "Machine Learning Engineers" },
  { id: "Devops Engineer", name: "Devops Engineer" },
  { id: "Security Engineers", name: "Security Engineers" },
  { id: "Game Engineers", name: "Game Engineers" },
  { id: "Embedded System Engineers", name: "Embedded System Engineers" },
];

function JobCategorySelector() {
  const dispatch = useDispatch();
  const selectedOptionId = useSelector(
    (state) => state.jobCategory.selectedOptionId
  );

  const handleOptionSelect = (optionId) => {
    dispatch(setJobCategoryOption(optionId));
  };

  return (
    <div className="p-1">
      {jobCategories.map((category) => (
        <div key={category.id}>
          <input
            type="radio"
            id={category.id}
            name="job-category"
            value={category.id}
            checked={selectedOptionId === category.id}
            onChange={() => handleOptionSelect(category.id)}
          />
          <label className="text-sm" htmlFor={category.id}>{category.name}</label>
        </div>
      ))}
    </div>
  );
}

export default JobCategorySelector;
