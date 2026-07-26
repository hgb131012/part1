const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p style={{fontWeight: 'bolder'}}>{name} {exercises}</p>
  )
}

const Course = (props) => {
  return (
    <main>
      <Header title={props.course.name} />
      <div>
        {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </div>
    </main>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;