export const Button = ({ children, ...props }) => {
  return (
    <button
      class="rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold leading-5 text-white hover:bg-indigo-500"
      {...props}
    >
      {children}
    </button>
  );
};
