const Part = (props) => {
  return (
    <p>{props.partName} {props.exercisesNum}</p>
  )
}

const Header = (props) => {
  return (
    <header>
      <h1>{props.courseName}</h1>
    </header>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.name1} exercisesNum={props.exercises1} />
      <Part partName={props.name2} exercisesNum={props.exercises2} />
      <Part partName={props.name3} exercisesNum={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <Content name1={part1} exercises3={exercises1}/>
      <Content name2={part2} exercises2={exercises2}/>
      <Content name3={part3} exercises1={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;