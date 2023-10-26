const Input = ({ name, type, id, label }) => {
  return (
    <div className="flex flex-col w-2/5 my-4">
      <label className="font-anton text-3xl" htmlFor={id}>
        {label}
      </label>
      <input
        className="bg-transparent outline-none border-b border-b-slate-500 my-2"
        type={type}
        name={name}
        required
      />
    </div>
  );
};

export default Input;
