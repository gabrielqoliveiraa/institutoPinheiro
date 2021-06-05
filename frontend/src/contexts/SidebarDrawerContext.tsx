import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { createContext, ReactNode, useEffect } from "react";

const SidebarDrawerContext = createContext({} as SidebarDrawerProps);

interface SidebarProviderProps {
  children: ReactNode;
}

type SidebarDrawerProps = UseDisclosureReturn

export function SidebarProvider({ children }: SidebarProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter()

  useEffect(() =>{
    disclosure.onClose()
  },[router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
        {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)