import { useState } from 'react';

const Header = ({ title, style }) => {
  return (
    <header>
      <h1 style={style}>{title}</h1>
    </header>
  )
}

const Button = ({ onClick, content, style }) => {
  return (
    <button style={style} onClick={onClick}>{content}</button>
  )
}

const StatisticsHeader = ({ title, style }) => {
  return (
    <h2 style={style}>{title}</h2>
  )
}

const StatisticsLine = ({ style, content, nums }) => {
  return (
    <p style={style}>{content} {nums}</p>
  )
}

const StatisticsDisplay = (props) => {
  if(props.totalNum > 0) {
    return (
      <section>
        <StatisticsLine style={props.style} content="good" nums={props.goodNum} />
        <StatisticsLine style={props.style} content="neutral" nums={props.neutralNum} />
        <StatisticsLine style={props.style} content="bad" nums={props.badNum} />
        <StatisticsLine style={props.style} content="all" nums={props.totalNum} />
        <StatisticsLine style={props.style} content="average" nums={props.average} />
        <StatisticsLine style={props.style} content="positive" nums={`${props.positive} %`} />
      </section>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
  
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <main>
      <Header title="give feedback" style={{fontFamily: 'Arial, Helvetica, sans-serif'}} />
      <Button onClick={() => {setGood(g => g + 1); setScore(s => s + 1)}} content="good" style={{fontSize: '16px', margin: '5px'}} />
      <Button onClick={() => setNeutral(n => n + 1)} content="neutral" style={{fontSize: '16px', margin: '5px'}} />
      <Button onClick={() => {setBad(b => b + 1); setScore(s => s - 1)}} content="bad" style={{fontSize: '16px', margin: '5px'}} />
      <StatisticsHeader title="statistics" style={{fontFamily: 'Arial, Helvetica, sans-serif'}} />
      <StatisticsDisplay goodNum={good} neutralNum={neutral} badNum={bad} totalNum={bad + good + neutral} positive={(good / (bad + good + neutral)) * 100} average={score / (bad + good + neutral)} style={{fontFamily: 'Arial, Helvetica, sans-serif'}}/>
    </main>
  )
}

export default App;