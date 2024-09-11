// interface ContentInterface {
//   Content?: Array<{ id: number; name: string; exercises: number }>;
// }

interface ContentInterface1 {
  Content1: Array<{ id?: number; content: string; exercises: number }>;
}

// interface PartInterface {
//   key?: number;
//   part: string;
//   exerciseNumber: number;
//   id: number;
// }

interface PartInterface1 {
  id?: number;
  content: string;
  exercises: number;
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

// const Part = ({ part, exerciseNumber, id }: PartInterface) => {
//   return (
//     <>
//       <p>
//         Part {id}. {part}, Total number of Exercises: {exerciseNumber}
//       </p>
//     </>
//   );
// };

const Part1 = ({ content, exercises, id }: PartInterface1) => {
  return (
    <>
      <p>
        Part {id}. {content} has {exercises} exercises
      </p>
    </>
  );
};

const Content1 = ({ Content1 }: ContentInterface1) => {
  return (
    <>
      {Content1?.map((content) => (
        <Part1
          key={content.id}
          content={content.content}
          exercises={content.exercises}
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  // const OldContentInformation = [
  //   { id: 1, name: part1, exercises: exercises1 },
  //   { id: 2, name: part2, exercises: exercises2 },
  //   { id: 3, name: part3, exercises: exercises3 },
  // ];

  const NewContentInformation: PartInterface1[] = [
    { id: 1, content: part1.name, exercises: part1.exercises },
    { id: 2, content: part2.name, exercises: part2.exercises },
    { id: 3, content: part3.name, exercises: part3.exercises },
  ];

  return (
    <div>
      <Header course={course} />
      <Content1 Content1={NewContentInformation} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
