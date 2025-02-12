"use client"
import { createContext, PropsWithChildren, useContext, useState } from "react";

type Modals = 'mobile-nav'
type ModalContextType = {
  closeAll: () => void,
  modals: Modals[],
  open: (modal: Modals) => void,
  remove: () => void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<Modals[]>([])

  const open = (modal: Modals) => setModals(prev => [...prev, modal])

  const remove = () => setModals(prev => prev.slice(0, prev.length - 1))

  const closeAll = () => setModals([])


  return (
    <ModalContext.Provider value={{ closeAll, modals, open, remove }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
