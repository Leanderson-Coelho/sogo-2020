export class CourseDTO {
  constructor(
    name,
    realizationDate,
    duration,
    vacancies,
    teacher,
    subscribers,
    id
  ) {
    this.name = name;
    this.realizationDate = realizationDate;
    this.duration = duration;
    this.vacancies = vacancies;
    this.teacher = teacher;
    this.subscribers = subscribers;
    this.id = id;
  }
}
