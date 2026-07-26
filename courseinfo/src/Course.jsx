const CourseHeader = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

const Total = (props) => {
  const total = props.part.reduce((sum, current) => sum + current.exercises, 0)
  return (
    <h3>total of {total} exercises</h3>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.courses.map((course) => {
        return (
          <section key={course.id}>
            <h2>{course.name}</h2>
            {course.parts.map((part) => {
              return (
                <p key={part.id}>{part.name} {part.exercises}</p>
              )
            })}
            <Total part={course.parts} />
          </section>
        )
      })}
    </div>
  )
  
}

const Course = (props) => {
  return (
    <main>
      <CourseHeader title="Web development curriculum" />
      <Part courses={props.courses} />
    </main>
  )
}

export default Course;