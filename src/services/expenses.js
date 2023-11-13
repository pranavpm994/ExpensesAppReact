import { useState, useEffect } from 'react';
import {
  setExpenses,
  newExpense,
  editExpense,
  deleteExpense,
  setExpensesError,
  newExpenseError,
  editExpenseError,
  deleteExpenseError,
} from '../app/expensesSlice';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Expenses`,
});
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: 'Bearer ' + sessionStorage.getItem('token'),
  };
  return config;
});
export const GetExpenses = async (dispatch) => {
  try {
    console.log('Request Sent');
    //api call
    // const expenses = [
    //   { id: 1, description: 'Groceries', amount: 23.5 },
    //   { id: 2, description: 'Electronics', amount: 50.5 },
    //   { id: 3, description: 'Credit Card', amount: 85.5 },
    // ];
    const { data } = await axiosInstance.get();
    dispatch(setExpenses(data));
    //Expensesreduces.js receives it to the appropriate
    //action and reducer sends the data which is used by
    //componenet to display.
  } catch {
    dispatch(setExpensesError());
    // console.log('Error!');
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //api call
    const { data } = await axiosInstance.post('', expense);
    console.log(data);
    dispatch(newExpense(data));
  } catch {
    // console.log('Error!');
    dispatch(newExpenseError());
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //api call
    await axiosInstance.put('', expense);
    dispatch(editExpense(expense));
  } catch {
    // console.log('Error!');
    dispatch(editExpenseError());
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  console.log('DeleteExpense:', expense);
  try {
    //api call
    await axiosInstance.delete('', { data: { ...expense } });
    dispatch(deleteExpense(expense));
  } catch (err) {
    // console.log('Error!');
    dispatch(deleteExpenseError());
  }
};
