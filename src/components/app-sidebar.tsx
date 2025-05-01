import { useState } from "react"
import { ChevronDown, ChevronRight, Home, Blocks, Settings, Upload } from "lucide-react"
import { NavLink } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const [openIntegrations, setOpenIntegrations] = useState(false)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Vulnerabilities Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              {/* Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/">
                    <Home />
                    Home
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Upload Vulnerability */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/upload">
                    <Upload />
                    Upload Vulnerability
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Integrations */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setOpenIntegrations(!openIntegrations)}
                  className=""
                >
                  <NavLink to="#" className="flex gap-2">
                    <Blocks />
                    Integrations
                  </NavLink>
                  {openIntegrations ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </SidebarMenuButton>

                {openIntegrations && (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <NavLink to="/integrations/slack" className="w-full">
                        {({ isActive }) => (
                          <SidebarMenuSubButton isActive={isActive}>
                            Slack
                          </SidebarMenuSubButton>
                        )}
                      </NavLink>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <NavLink to="/integrations/jira" className="w-full">
                        {({ isActive }) => (
                          <SidebarMenuSubButton isActive={isActive}>
                            Jira
                          </SidebarMenuSubButton>
                        )}
                      </NavLink>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <NavLink to="/integrations/hackerone" className="w-full">
                        {({ isActive }) => (
                          <SidebarMenuSubButton isActive={isActive}>
                            Hackerone
                          </SidebarMenuSubButton>
                        )}
                      </NavLink>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

              {/* Settings */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/settings">
                    <Settings />
                    Settings
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
