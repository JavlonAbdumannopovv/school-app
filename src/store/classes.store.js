import { create } from "zustand";
import { sinflar, talabalar } from "../config/data";

const useClass = create((set) => ({
  classes: [...sinflar],
  students: [...talabalar],
  currentClass: { ...sinflar[0] },
  addClass: (clas) =>
    set((state) => ({
      classes: [...state.classes, clas],
    })),
  removeClass: (classId) =>
    set((state) => ({
      classes: state.classes.filter((clas) => clas.id !== classId),
    })),
  removeStudent: (studentId) =>
    set((state) => ({
      students: state.students.filter((student) => student.id !== studentId),
    })),
  setCurrentClass: (classId) =>
    set((state) => ({
      currentClass: state.classes.find((clas) => clas.id !== classId),
    })),
}));

export default useClass;
