import { AppSidebar } from "@/Components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/Components/ui/sidebar"
import React, { ReactNode } from "react";

interface MainSidebarProps {
    children: ReactNode;
}

const MainSidebar: React.FC<MainSidebarProps> = ({children}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset >
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainSidebar