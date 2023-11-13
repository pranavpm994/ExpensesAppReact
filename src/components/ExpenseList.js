import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Row, Button, Col } from 'react-bootstrap';
import { MoonLoader } from 'react-spinners';
import ExpenseForm from './ExpenseForm';
//useSelector helps to retreive data from state.
export default () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesSlice.expenses);
  const [isLoadingExpenses, setIsLoadingExpenses] = useState(true);
  // useDispatch is a hook that allows us to use dispatch we need
  //to pass it to services so that they can dispatch the reqd action.
  useEffect(() => {
    // async function GetExpensesAsync() {
    //   GetExpenses(dispatch).then((response) => {
    //     console.log('Hello123');
    //   });
    // }
    // GetExpensesAsync();
    GetExpenses(dispatch).then((response) => {
      setIsLoadingExpenses(false);
    });
  }, []);
  //[] means run the function only once, on the page load. If[someDataVariable], means run the function everytime the [variable] changes.
  // GetExpenses(dispatch);
  return !isLoadingExpenses ? (
    expenses.map((e) => (
      <div key={e.id} style={{ marginBottom: '1rem' }}>
        <ListRow expense={e} />
      </div>
    ))
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      {/* <Backdrop className={classes.Backdrop} open>
        <CircularProgress color='inherit' />
      </Backdrop> */}

      <MoonLoader color='black' loading={isLoadingExpenses} size={50} />
    </div>
  );
  //run the function each time the variable in [] changes.
  //Here we need initial call to api to list expenses so leave empty.
  //Means it'll run the first time and no condition to check to rerun.
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Col>
          <Button variant='warning' onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
