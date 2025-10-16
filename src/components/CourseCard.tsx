import { Link } from "react-router-dom";
import type { Course } from "../types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card bg-white shadow-md p-4 rounded-lg">
      <img src={course.imageUrl || "/placeholder.png"} alt={course.title} className="h-40 w-full object-cover rounded-md" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <div className="text-sm text-gray-600">{course.level || "Beginner"} • {course.lessonsCount ?? 0} leçons</div>
        <Link to={`/courses/${course.id}`} className="btn btn-sm btn-primary mt-3">Voir le cours</Link>
      </div>
    </div>
  );
}
