const ContainedButton = (props: { href: string; text: string }) => {
  return (
    <>
      <a
        className="px-10 py-3 bg-main-900 text-gray-200 text-md font-semibold rounded-xl hover:bg-main-800 r-20 mt-3"
        href={props.href}
      >
        {props.text}
      </a>
    </>
  );
};

export default ContainedButton;
