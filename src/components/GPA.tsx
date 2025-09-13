import React from "react";
import { useCourseStore } from "../store/courseStore";

const GPA: React.FC = () => {
  const gpa = useCourseStore((state) => state.getGPA());
  const gpaDisplay = gpa.toFixed(2);

  return (
    <p>
      <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>GPA : </span>{" "}
      <span style={{ fontSize: "1.5rem" }}>{gpaDisplay}</span>
    </p>
  );
};

export default GPA;