import { Dispatch, SetStateAction, useState } from "react";
import { MainContainedButton } from "../gobal";
import "./style.css";

const playModes = [
  {
    id: 1,
    name: "Baseball cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 2,
    name: "Softball cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 3,
    name: "Cricket cage",
    image: "/play-modes/baseball.png",
  },
  {
    id: 4,
    name: "Open field",
    image: "/play-modes/baseball.png",
  },
];

const SportsCard = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center mt-5 w-full">
        <div className="rounded-3xl p-10 pt-5 shadow-md w-11/12 bg-main-900 sports_selection_card">
          <div className="w-full items-center justify-between pb-0 md:flex">
            <div className="flex items-center">
              <h2 className="text-3xl font-medium text-gray-700 sm:text-3xl dark:text-gray-200">
                Play modes
              </h2>
            </div>

            <div className="flex items-center sm:mt-4">
              <MainContainedButton href="/" text="Proceed" />
            </div>
          </div>

          <p className="text-md text-gray-400 max-sm:mt-5">
            Select your champion sport to proceed
          </p>

          <div className="mb-2">
            <div className="container">
              <div className="mt-5 md:flex md:space-x-10">
                {playModes.map((mode) => (
                  <SportsCardImage
                    name={mode.name}
                    image={mode.image}
                    productId={mode.id}
                    key={mode.id}
                    isSelected={isSelected === mode.id}
                    setIsSelected={setIsSelected}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCard;

const SportsCardImage = (props: {
  name: string;
  image: string;
  productId: number;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div
        className={`flex justify-center border-4 cursor-pointer rounded-xl content-end ${
          props.isSelected ? "border-red-500" : "border-gray-700"
        } md:w-full bg-[url('${props.image}')] h-40 align-bottom`}
        onClick={() => props.setIsSelected(props.productId)}
      >
        <span className="text-white inset-x-0 bottom-0 mt-28">
          {props.name}
        </span>
      </div>
      ​
    </>
  );
};
