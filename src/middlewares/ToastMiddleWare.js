import {
  deleteExpense,
  editExpense,
  newExpense,
  setExpensesError,
  newExpenseError,
  editExpenseError,
  deleteExpenseError,
} from '../app/expensesSlice';
import { toast } from 'react-toastify';

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case newExpense.type:
      toast.success('New expense added!!!');
      break;
    case editExpense.type:
      toast.success('Epenses updated!!!');
      break;
    case deleteExpense.type:
      toast.success('Expense deleted!!!');
      break;
    case setExpensesError.type:
      toast.error('Error loading expenses');
      break;
    case newExpenseError.type:
      toast.error('Error adding new expense');
      break;
    case editExpenseError.type:
      toast.error('Error updating expense');
      break;
    case deleteExpenseError.type:
      toast.error('Error deleting expense');
      break;
    default:
      break;
  }
  next(action);
};
export default ToastMiddleware;
