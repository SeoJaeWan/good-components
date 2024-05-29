import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const cartMachine = createMachine({
  id: "cart",
  initial: "empty",
  states: {
    empty: {},

    hold: {},
  },
});

const items = [
  {
    label: "라면",
    value: "1",
  },
  {
    label: "김밥",
    value: "2",
  },
  {
    label: "스팸",
    value: "3",
  },
  {
    label: "모시깽",
    value: "4",
  },
];

const XStatePage = () => {
  const [state, send] = useMachine(cartMachine);

  return <div></div>;
};

export default XStatePage;
