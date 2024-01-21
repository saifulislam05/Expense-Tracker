import React, { useRef, useEffect, useState } from "react";
import { useExpense } from "../../Context/Context";

const BudgetModal = () => {
    const [budget, setBudget] = useState();
  const { expenseDispatch } = useExpense();
    
  const budgetModalRef = useRef(null);

  useEffect(() => {
    const modal = budgetModalRef.current;
    modal.showModal();
  }, []);

  return (
    <dialog ref={budgetModalRef} id="budget_modal" className="modal bg-[#20202086]">
      <div className="modal-box max-w-72 border-accent">
        <h3 className="font-bold text-lg text-center mb-3">Add your Budget first</h3>
       <input type="number" value={budget} onChange={(e)=>setBudget(e.target.value)} className=" w-full input input-accent" />
        <div className="modal-action w-full">
          <form method="dialog" className="w-fit mx-auto">
            <button className="btn btn-accent px-7" onClick={()=>expenseDispatch({type:"ADD_BUDGET",payload:Number(budget)})}>Add</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BudgetModal;
