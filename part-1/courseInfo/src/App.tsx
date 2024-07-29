interface ContentInterface {
  Content: Array<{ id: number; name: string; exercises: number }>;
}

interface PartInterface {
  part: string;
  exerciseNumber: number;
  id: number;
}

interface totalInterface {
  exercises: number[];
}
const Header = ({ course }: { course: string }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ part, exerciseNumber, id }: PartInterface) => {
  return (
    <>
      <p>
        Part {id}. {part}, Total number of Exercises: {exerciseNumber}
      </p>
    </>
  );
};

const Content = ({ Content }: ContentInterface) => {
  return (
    <>
      {Content.map((Content, key) => (
        <Part
          key={key}
          id={Content.id}
          part={Content.name}
          exerciseNumber={Content.exercises}
        />
      ))}
    </>
  );
};

const Total = ({ exercises }: totalInterface) => {
  return (
    <>
      <p>
        Total number of exercises of the course: {""}
        {exercises.reduce((acc, curr) => acc + curr, 0)}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const ContentInformation = [
    { id: 1, name: part1, exercises: exercises1 },
    { id: 2, name: part2, exercises: exercises2 },
    { id: 3, name: part3, exercises: exercises3 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content Content={ContentInformation} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
