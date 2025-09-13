import { useState } from "react";
import { useCourseStore } from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [form, setForm] = useState({
    course_id: "",
    nameTh: "",
    nameEn: "",
    credits: 0,
    instructor: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({ id: Date.now().toString(), ...form, credits: Number(form.credits) });
    setForm({ course_id: "", nameTh: "", nameEn: "", credits: 0, instructor: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="mb-4">
        <label htmlFor="course_id">
          รหัสรายวิชา
        </label>
        <input
          id="course_id"
          name="course_id"
          value={form.course_id}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nameTh" >
          ชื่อวิชา (ไทย)
        </label>
        <input
          id="nameTh"
          name="nameTh"
          value={form.nameTh}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nameEn">
          ชื่อวิชา (Eng)
        </label>
        <input
          id="nameEn"
          name="nameEn"
          value={form.nameEn}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="credits">
          หน่วยกิต
        </label>
        <input
          id="credits"
          type="number"
          name="credits"
          value={form.credits}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructor">
          อาจารย์
        </label>
        <input
          id="instructor"
          name="instructor"
          value={form.instructor}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="grade">
          เกรด
        </label>
        <select
          id="grade"
          name="grade"
          value={form.grade}
          onChange={handleChange}
        
        >
          <option value="">-- เลือกเกรด --</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </div>

      <button
        type="submit" className="add-add-button w-full"
      >
        เพิ่มรายวิชา
      </button>
      
    </form>
  );
};

export default CourseForm;