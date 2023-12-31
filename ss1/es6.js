let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];

const rateCourses = courses.filter((courses) => courses.rating >= 4);
console.log(rateCourses);

const rateCourses1 = courses
  .filter((courses) => courses.rating < 4)
  .map((courses) => `${courses.id} - ${courses.title} - ${courses.rating}`);
// rateCourses1.forEach((courses) =>
console.log(rateCourses1);
// );

let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];

const merge = (arr1, arr2) => [...courses, ...addedCourses];
const mergeCourses = merge(courses, addedCourses);
console.log(mergeCourses);
