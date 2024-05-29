import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";

const cartMachine = createMachine(
  {
    id: "cart",
    initial: "empty",
    states: {
      empty: {
        on: {
          ADD_CART: {
            target: "hold",
            actions: ["addItem"],
          },
        },
      },

      hold: {
        always: {
          target: "empty",
          guard: "isEmpty",
        },
        on: {
          ADD_CART: {
            actions: ["addItem"],
          },
          RESET_CART: {
            target: "empty",
            actions: ["resetItems"],
          },
          REMOVE_ITEM: {
            actions: ["removeItem"],
          },
        },
      },
    },

    context: {
      items: [],
    },
  },
  //   {
  //     actions: {
  //       addItem: ({ context, event }) => {
  //         console.log(context, event);
  //         context.items.push(event.item);
  //       },
  //     },
  //   }
  {
    actions: {
      addItem: assign({
        items: ({ context: { items }, event }) => [...items, event.item],
      }),
      resetItems: assign({
        items: [],
      }),
      removeItem: assign({
        items: ({ context: { items }, event }) =>
          items.filter((_, idx) => idx !== event.idx),
      }),
    },
    guards: {
      isEmpty: ({ context: { items } }) => items.length === 0,
    },
  }
);

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

  return (
    <div>
      <p>{state.value}</p>

      <ul>
        {state.context.items.map(({ label, value }, idx) => (
          <li key={idx}>
            {label}
            <button onClick={() => send({ type: "REMOVE_ITEM", idx })}>
              삭제
            </button>
          </li>
        ))}
      </ul>

      {items.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => send({ type: "ADD_CART", item: { label, value } })}
        >
          {label} 장바구니 담기
        </button>
      ))}

      <button onClick={() => send({ type: "RESET_CART" })}>초기화</button>
    </div>
  );
};

export default XStatePage;
