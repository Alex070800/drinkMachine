import { useEffect, useRef, useState } from "react";
import { bemCN } from "../../config/bem";
import "./drink-machine.scss";
import { drinkService } from "../../services/drink-service";
import { Drink } from "../../view-models/drink";

const drinkMachineCN = bemCN("drink-machine");

export const DrinkMachine = () => {
  const [drinks, setDrinks] = useState<any[]>([]);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drinkService.getDrinks().then((res: Drink[]) => {
      if (res) setDrinks(res);
    });
  }, []);

  const [currdeg, setCurrdeg] = useState(0);

  function rotate(e: any) {
    setCurrdeg(currdeg + 360);
    if (carouselRef && carouselRef.current) {
      // carouselRef.current.style.transform = "rotateY(" + currdeg + "deg)";
    }
  }
  return (
    <div className={drinkMachineCN()}>
      <div>
        <div className={drinkMachineCN("drinks-block")}>
          {/* <div ref={carouselRef} className={drinkMachineCN("carousel")}>
            <div className={drinkMachineCN("brand")}></div>
          </div> */}
        </div>
        {/* <button onClick={rotate}>Тык</button> */}
        {/* <div className={drinkMachineCN("drinks")}>
          {drinks.length > 0 &&
            drinks.map((d: any) => (
              <img src={"data:image/png;base64," + d.image} />
            ))}
        </div> */}

        <div className={drinkMachineCN("push")}></div>
      </div>
      <div className={drinkMachineCN("pay")}></div>
    </div>
  );
};
