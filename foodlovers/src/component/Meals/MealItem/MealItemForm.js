import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountAmountRef=useRef();
  const [isValidAmount,setIsValidAmount]= useState(true);
  const onSubmitHaldler = (event) => {
    event.preventDefault();
    const enteredAmount=amountAmountRef.current.value;
    const enteredAmountNum=+enteredAmount;

    if(enteredAmount.trim().lenght === 0 || enteredAmountNum < 1 ||enteredAmountNum > 5){
      setIsValidAmount(false)
      return
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHaldler}>
      <Input
        ref={amountAmountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> +Add</button>
      {!isValidAmount && <p>Please Enter a Valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
