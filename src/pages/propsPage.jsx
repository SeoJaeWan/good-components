import { useState } from "react";

const changeUrl = () => {};

const Search = () => {
  return (
    <>
      {/* ... */}
      {/* ... */}
    </>
  );
};

const Deps = (props) => {
  const { value, setValue, handleSubmit } = props;

  return (
    <Search value={value} setValue={setValue} handleSubmit={handleSubmit} />
  );
};

const Deps2 = (props) => {
  const { value, setValue, handleSubmit } = props;

  return (
    <Search value={value} setValue={setValue} handleSubmit={handleSubmit} />
  );
};

const PropsPage = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    changeUrl(value);
  };

  return (
    <Search value={value} setValue={setValue} handleSubmit={handleSubmit} />
  );
};

export default PropsPage;
