"use client";

import { AnimatePresence, motion } from "framer-motion"; 
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function CartButton() {
  const { toggleOpen, getCount, state } = useCart(); 
  const count = getCount();

  return (
    <AnimatePresence>
      {!state.open && (
        <motion.button
          key="cart-button"
          // 4. Add animation props
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          // ---
          onClick={toggleOpen}
          className="fixed right-5 bottom-6 z-80 flex items-center gap-3 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FiShoppingCart size={18} />
          <span className="font-medium">Cart</span>
          {count > 0 && (
            <span className="ml-2 bg-amber-400 text-black px-2 py-0.5 rounded-full text-sm font-semibold">
              {count}
            </span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}