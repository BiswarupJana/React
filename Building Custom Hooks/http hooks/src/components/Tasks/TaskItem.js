import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  const itemDelHandler=()=>{
    
    
  //   var ref =firebase.database().ref('items');
  // ref.on('value',this.handlegetData,this.handleErrData);
  // ['items']['KpAmo20xP6HPXc7cwjY'].remove();
  };
  return <li className={classes.task}>{props.children}<button onClick={itemDelHandler}>&#9249;</button></li>
};

export default TaskItem;