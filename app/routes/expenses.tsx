import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import ExpensesList from "~/components/expenses/ExpensesList";

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

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
