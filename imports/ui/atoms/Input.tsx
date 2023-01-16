interface Input extends React.HTMLProps<HTMLInputElement> {}

const Input = ({ ...args }: Input) => {
  return <input {...args} />;
};

export default Input;
