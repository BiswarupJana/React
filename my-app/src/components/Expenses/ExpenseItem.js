import React /*{ useState }*/ from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');
    // setTimeout(4);

    // const clickHandler = () => {
    //     setTitle('Update!');
    //     console.log(title);
    // };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            {/* <button onClick={clickHandler}>change Items</button> */}
        </Card>
    );
}

export default ExpenseItem;