import { PiUsersThree } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { LuBookCopy } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import EngIcons from "../icons/eng";
import RusIcons from "../icons/rus";
import UzbIcons from "../icons/uzb";

export const adminNavigation = [
  {
    id: 1,
    slug: "sinflar",
    title: "Sinflar",
    icon: PiUsersThree,
  },
  {
    id: 2,
    slug: "oqituvchilar",
    title: "O`qituvchilar",
    icon: FaChalkboardTeacher,
  },
  {
    id: 3,
    slug: "oquvchilar",
    title: "O`quvchilar",
    icon: CiUser,
  },
  {
    id: 4,
    slug: "fanlar",
    title: "Fanlar",
    icon: LuBookCopy,
  },
  {
    id: 5,
    slug: "dars_jadvali",
    title: "Dars jadvali",
    icon: IoCalendarOutline,
  },
  {
    id: 6,
    slug: "jurnal",
    title: "Jurnal",
    icon: FaRegFileLines,
  },
  {
    id: 7,
    slug: "kpi",
    title: "Kpi",
    icon: TbReportAnalytics,
  },
];

export const language = [
  { nativeLng: "English", lng: "en", icon: EngIcons },
  { nativeLng: "O'zbek", lng: "uz", icon: UzbIcons },
  { nativeLng: "Русский", lng: "ru", icon: RusIcons },
];
