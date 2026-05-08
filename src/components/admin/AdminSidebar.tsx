import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Sparkles, Layers, Image as ImageIcon, MessageSquare,
  HelpCircle, Megaphone, Phone, LogOut, ExternalLink,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const items = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard, end: true },
  { title: "Hero", url: "/admin/hero", icon: Sparkles },
  { title: "Beneficios", url: "/admin/benefits", icon: Layers },
  { title: "Programas", url: "/admin/programs", icon: Layers },
  { title: "Galería", url: "/admin/gallery", icon: ImageIcon },
  { title: "Testimonios", url: "/admin/testimonials", icon: MessageSquare },
  { title: "FAQ", url: "/admin/faq", icon: HelpCircle },
  { title: "CTA Final", url: "/admin/cta", icon: Megaphone },
  { title: "Footer", url: "/admin/footer", icon: Phone },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className={`p-4 ${collapsed ? "px-2" : ""}`}>
          {!collapsed && <h2 className="font-display text-xl font-bold text-gradient">CMS</h2>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Editor</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = item.end ? pathname === item.url : pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink to={item.url} end={item.end} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    {!collapsed && <span>Ver sitio</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-2">
          <Button variant="ghost" size="sm" className="w-full justify-start" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" />
            {!collapsed && "Cerrar sesión"}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
