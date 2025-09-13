import { create } from "zustand";

// โครงสร้างของรายวิชา
export interface Course {
  id: string;
  course_id: string;
  nameTh: string;
  nameEn: string;
  credits: number;
  instructor: string;
  grade: string;
}

interface CourseState {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  getGPA: () => number;
}

const gradePointMap: Record<string, number> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0,
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, course],
      };
    }),
  getGPA: () => {
    const { courses } = get();
    if (courses.length === 0) return 0;
    const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
    const totalPoints = courses.reduce(
      (sum, c) => sum + (gradePointMap[c.grade] || 0) * c.credits,
      0
    );
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
