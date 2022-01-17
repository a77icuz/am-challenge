export default function getStudentOrStaff({ hogwartsStudent, hogwartsStaff }) {
  if (hogwartsStudent) return 'ESTUDIANTE';
  if (hogwartsStaff) return 'STAFF';
  return 'NA';
}
