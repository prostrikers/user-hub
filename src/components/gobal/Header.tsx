import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const Header = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-800 md:text-7xl">
        {props.children}
      </h2>
    </>
  );
};

export default Header;
