import { DrinkMachine } from "../../components/drink-machine/drink-machine";
import { bemCN } from "../../config/bem";
import "./drink-machine-page.scss";

const drinkMachinePageCN = bemCN("drink-machine-page");
export const DrinkMachinePage = () => {
  return (
    <div className={drinkMachinePageCN()}>
      <DrinkMachine></DrinkMachine>
    </div>
  );
};
