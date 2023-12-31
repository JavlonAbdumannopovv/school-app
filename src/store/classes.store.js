import { create } from "zustand";
import { fanlar, oqituvchilar, sinflar, talabalar } from "../config/data";

const useClass = create((set) => ({
  classes: [...sinflar],
  teachers: [...oqituvchilar],
  students: [...talabalar],
  studentInfo: { ...talabalar[0] },
  studentInfoOpen: false,
  fanlar: [...fanlar],
  currentClass: { ...sinflar[0] },
  addClass: (clas) =>
    set((state) => ({
      classes: [...state.classes, clas],
    })),
  removeClass: (classId) =>
    set((state) => ({
      classes: state.classes.filter((clas) => clas.id !== classId),
    })),
  editClass: (editClass) =>
    set((state) => ({
      classes: [
        ...state.classes.filter((c) => c.id !== editClass.id),
        editClass,
      ],
    })),
  removeStudent: (studentId) =>
    set((state) => ({
      students: state.students.filter((student) => student.id !== studentId),
    })),
  setCurrentClass: (classId) =>
    set((state) => ({
      currentClass: state.classes.find((clas) => clas.id !== classId),
    })),
  setStudentInfo: (studentId) =>
    set((state) => ({
      studentInfo: state.students.find((student) => student.id === studentId),
    })),
  studentInfoOpenToggler: (bool) =>
    set(() => ({
      studentInfoOpen: bool,
    })),
}));

export default useClass;
