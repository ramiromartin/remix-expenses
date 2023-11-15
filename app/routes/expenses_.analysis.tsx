import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
// import expensesStyles from "~/styles/expenses.css";

// export function links() {
//   return [{ rel: "stylesheet", href: expensesStyles }];
// }

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 14.99,
    date: new Date().toISOString(),
  },
  {
    id: "e3",
    title: "Third Expense",
    amount: 19.99,
    date: new Date().toISOString(),
  },
];

export default function AnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
