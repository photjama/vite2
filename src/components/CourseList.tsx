import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);

  return (
    <div>
      <table>
        
          <tr>
            <th>รหัสวิชา</th>
            <th>ชื่อวิชา (ไทย)</th>
            <th>ชื่อวิชา (Eng)</th>
            <th>หน่วยกิต</th>
            <th>อาจารย์</th>
            <th>เกรด</th>
            <th>ถอน</th>
          </tr>
        <tbody>
        
       
          {courses.map((course) => (
            <tr
              key={course.id}
             
            >
              <td>{course.course_id}</td>
              <td>{course.nameTh}</td>
              <td>{course.nameEn}</td>
              <td>{course.credits}</td>
              <td>{course.instructor}</td>
              <td>{course.grade}</td>
              <td><DropButton id={course.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;