import type { FC } from "react";
import {
  ThreadListItemPrimitive,
  ThreadListPrimitive,
} from "@assistant-ui/react";
import { ArchiveIcon, PlusIcon, Trash2, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThreadList: FC = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Threads</SidebarGroupLabel>
      <SidebarMenu>
        <ThreadListNew />
        <ThreadListItems />
      </SidebarMenu>
    </SidebarGroup>
  );
};

const ThreadListNew: FC = () => {
  return (
    <ThreadListPrimitive.New asChild>
      <Button
        className="data-[active]:bg-muted hover:bg-muted flex items-center justify-start gap-1 rounded-lg px-2.5 py-2 text-start"
        variant="ghost"
      >
        <PlusIcon />
        New Thread
      </Button>
    </ThreadListPrimitive.New>
  );
};

const ThreadListItems: FC = () => {
  return <ThreadListPrimitive.Items components={{ ThreadListItem }} />;
};

const ThreadListItem: FC = () => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <ThreadListItemPrimitive.Trigger className="flex-grow px-3 py-2 text-start cursor-pointer">
          <ThreadListItemTitle />
        </ThreadListItemPrimitive.Trigger>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction showOnHover>
            <MoreHorizontal />
            <span className="sr-only">More</span>
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <ThreadListItemPrimitive.Archive asChild>
              <TooltipIconButton
                className="hover:text-primary text-muted-foreground ml-auto size-4 p-0 mr-14"
                variant="ghost"
                tooltip="Archive thread"
              >
                <ArchiveIcon />
                <span>Archive</span>
              </TooltipIconButton>
            </ThreadListItemPrimitive.Archive>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ThreadListItemPrimitive.Delete asChild>
              <TooltipIconButton
                className="hover:text-primary text-muted-foreground ml-auto size-4 p-0 mr-15"
                variant="ghost"
                tooltip="Delete thread"
              >
                <Trash2 />
                <span>Delete</span>
              </TooltipIconButton>
            </ThreadListItemPrimitive.Delete>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};

const ThreadListItemTitle: FC = () => {
  return (
    <p className="text-sm">
      <ThreadListItemPrimitive.Title fallback="New Chat" />
    </p>
  );
};

// const ThreadListItemArchive: FC = () => {
//   return (
//     <ThreadListItemPrimitive.Archive asChild>
//       <TooltipIconButton
//         className="hover:text-primary text-foreground ml-auto mr-3 size-4 p-0"
//         variant="ghost"
//         tooltip="Archive thread"
//       >
//         <ArchiveIcon />
//       </TooltipIconButton>
//     </ThreadListItemPrimitive.Archive>
//   );
// };
