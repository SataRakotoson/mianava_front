import { create } from 'zustand'

export const useStore = create((set, get) => ({
  cartData: [],
  total: 0,

  // Ajouter un article au panier
  addToCart: (item) => set((state) => ({ cartData: [...state.cartData, item] })),

  // Supprimer un article du panier
  removeFromCart: (item) => set((state) => ({ cartData: state.cartData.filter(i => i.product.id !== item.product.id) })),

  // Vider le panier
  clearCart: () => set({ cartData: [] }),

  // Sélecteurs
  getTotal: () => get().cartData.reduce((total, item) => total + item.skus[0].fieldData.price.value, 0),
  getItemCount: () => get().cartData.length,

}))