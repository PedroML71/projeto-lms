import { FC } from "react";
import { Chapter, Course, UserProgress } from "@prisma/client";
import NavbarRoutes from "@/components/navbar-routes";
import CourseMobileSidebar from "./course-mobile-sidebar";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };

  progressCount: number;
}

const CourseNavbar: FC<CourseNavbarProps> = ({ course, progressCount }) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};

export default CourseNavbar;
