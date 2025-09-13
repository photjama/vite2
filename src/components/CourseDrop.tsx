import { useCourseStore } from "../store/courseStore";

const CourseDrop = () => {
  const droppedCourses = useCourseStore((state) => state.droppedCourses);

  return (
        <table>
            <tr>
              <th>รหัสวิชา</th>
              <th>ชื่อวิชา (ไทย)</th>
              <th>ชื่อวิชา (Eng)</th>
              <th>หน่วยกิต</th>
              <th>อาจารย์</th>
              <th>เกรด</th>
            </tr>
          <tbody>
            {droppedCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.course_id}</td>
                <td>{course.nameTh}</td>
                <td>{course.nameEn}</td>
                <td>{course.credits}</td>
                <td>{course.instructor}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default CourseDrop;