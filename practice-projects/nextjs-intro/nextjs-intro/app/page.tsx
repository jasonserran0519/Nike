import Link from "next/link";

async function Quizzes() {
  const quizzes = [
    {id: 1, name: 'Quiz 1'},
    {id: 2, name: 'Quiz 2'},
    {id: 3, name: 'Quiz 3'}
  ]

  return (
    <ul>
        {quizzes.map((quiz => (
          <li key={quiz.id} className="underline">
            <Link href={`/quiz/${quiz.id}`}>{quiz.name}</Link>
          </li>
        )))}
      </ul>
  );
}

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-blue-700">All Quizzes</h1>
      <Quizzes />
    </section>
  );
}
