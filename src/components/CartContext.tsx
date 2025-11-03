"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  imageUrl?: string;
  qty: number;
};

type State = {
  open: boolean;
  items: CartItem[];
};

type Action =
  | { type: "TOGGLE_OPEN" }
  | { type: "SET_OPEN"; payload: boolean }
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "qty"> }
  | { type: "REMOVE_ITEM"; payload: { id: CartItem["id"] } }
  | { type: "INCREMENT"; payload: { id: CartItem["id"] } }
  | { type: "DECREMENT"; payload: { id: CartItem["id"] } }
  | { type: "CLEAR_CART" };

const initialState: State = {
  open: false,
  items: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return { ...state, open: !state.open };
    case "SET_OPEN":
      return { ...state, open: action.payload };
    case "ADD_ITEM": {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (found) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, qty: 1 } as CartItem,
        ],
      };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) => (i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i)),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.payload.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
          .filter((i) => i.qty > 0),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<
  | {
      state: State;
      addItem: (item: Omit<CartItem, "qty">) => void;
      removeItem: (id: CartItem["id"]) => void;
      increment: (id: CartItem["id"]) => void;
      decrement: (id: CartItem["id"]) => void;
      toggleOpen: () => void;
      setOpen: (open: boolean) => void;
      getTotal: () => number;
      getCount: () => number;
      clearCart: () => void;
    }
  | undefined
>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    // This part is fine: it loads the persisted state
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("cart_state") : null;
      
      return raw ? JSON.parse(raw) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    try {
      // Create a copy of the state but force 'open' to be false
      const stateToPersist = { ...state, open: false };
      localStorage.setItem("cart_state", JSON.stringify(stateToPersist));
    } catch {
      // ignore write errors
    }
  }, [state]); // This effect still runs whenever state changes

  const addItem = (item: Omit<CartItem, "qty">) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id: CartItem["id"]) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const increment = (id: CartItem["id"]) => dispatch({ type: "INCREMENT", payload: { id } });
  const decrement = (id: CartItem["id"]) => dispatch({ type: "DECREMENT", payload: { id } });
  const toggleOpen = () => dispatch({ type: "TOGGLE_OPEN" });
  const setOpen = (open: boolean) => dispatch({ type: "SET_OPEN", payload: open });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const getTotal = () =>
    state.items.reduce((sum, it) => sum + Number(it.price) * it.qty, 0);

  const getCount = () => state.items.reduce((sum, it) => sum + it.qty, 0);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, increment, decrement, toggleOpen, setOpen, getTotal, getCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};