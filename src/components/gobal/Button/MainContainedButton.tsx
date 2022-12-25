const MainContainedButton = (props: {
  href: string;
  text: string;
  withPadding?: boolean;
  className?: string;
}) => {
  return (
    <a
      className={`px-10 py-3 bg-main-400 text-white text-md font-semibold rounded-md hover:bg-main-300 mt-3 ${
        props.withPadding ? "w-full" : ""
      } ${props?.className}`}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default MainContainedButton;
