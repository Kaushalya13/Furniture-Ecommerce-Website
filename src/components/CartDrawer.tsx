"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartContext";
import Image from "next/image";
import { FiX, FiTrash2 } from "react-icons/fi";

export default function CartDrawer() {
  const { state, increment, decrement, removeItem, getTotal, setOpen } = useCart();

  return (
    <AnimatePresence>
      {state.open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-60"
          />
          
          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-70 flex flex-col"
          >
            {/* Cart Items List */}
            <div className="p-4 flex-1 overflow-auto space-y-4">
              <div className="flex items-center gap-4 p-7"></div>
              <button 
                onClick={() => setOpen(false)} 
                className="p-2 rounded-md bg-gray-100"
              >
                <FiX size={20} />
              </button>
              {state.items.length === 0 ? (
                <div className="text-center text-gray-500 mt-12">Your cart is empty.</div>
              ) : (
                state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100 shrink-0">
                      {item.imageUrl ? (
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      ) : null}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.qty} × ${item.price.toFixed(2)}</p>
                        </div>
                        <button className="text-red-500" onClick={() => removeItem(item.id)}>
                          <FiTrash2 />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="w-9 h-9 rounded-md border flex items-center justify-center"
                        >
                          -
                        </button>
                        <div className="px-3">{item.qty}</div>
                        <button
                          onClick={() => increment(item.id)}
                          className="w-9 h-9 rounded-md border flex items-center justify-center"
                        >
                          +
                        </button>
                        <div className="ml-auto font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Total Section */}
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-bold">${getTotal().toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <button className="w-full py-3 rounded-md bg-amber-400 text-white font-semibold">Checkout</button>
                <button onClick={() => window.alert("Continue shopping")} className="w-full py-3 rounded-md border">
                  Continue Shopping
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}