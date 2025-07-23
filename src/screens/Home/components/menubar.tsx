import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { invoke } from "@tauri-apps/api/core";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Database, FileOutput, LogOut, Plus } from "lucide-react";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";

interface Error {
  status: boolean,
  message: string,
}

function Menu() {
  const [error, setError] = useState<Error>();
  const [open, setOpen] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>();

  async function handleClick() {
    if (filename == undefined) {
      setError({status: true, message: "The database must have a defined name"});
      toast.error("Failed to create a new database file", { description: "The database must have a defined name" })
      return;
    }

    const path = await invoke("new_file", { name: filename });
    await invoke("set_file", { databasePath: path });
    
    setOpen(false);
    toast.success("Database successfully created");
  }

  function handleExit() {
    invoke("exit_app");
  }

  useEffect(() => {
    if (error?.status == true) {
      setTimeout(() => {
        setError({ status: false, message: "" });
      }, 2000);
    }
  }, [error]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Menubar className="px-2 py-5 rounded-none">
        <MenubarMenu>
          <MenubarTrigger className="text-center cursor-pointer">File</MenubarTrigger>
          <MenubarContent>
            <DialogTrigger className="w-full">
              <MenubarItem className="cursor-pointer"><Plus /> New</MenubarItem>
            </DialogTrigger>
            <MenubarItem className="cursor-pointer"><FileOutput /> Open</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="cursor-pointer" onClick={handleExit}><LogOut /> Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <DialogContent className="select-none">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center gap-2"><Database />Create a new database</DialogTitle>
          <DialogDescription className="mt-5 flex flex-col space-y-2">
            <Input 
              type="text" 
              id="name" 
              placeholder="Database name" 
              maxLength={15} 
              minLength={3}
              autoComplete="off"
              autoCorrect="off"
              onChange={(e) => setFilename(e.target.value)}
              className={`transition-all ease-in-out focus:border-neutral-100 focus:shadow-none focus-visible:ring-1 focus-visible:ring-neutral-200
              ${error?.status == true ? "border-red-500" : ""}`}
            />
            <Button 
              type="submit" 
              variant="outline" 
              className="font-normal text-neutral-100 bg-neutral-800 cursor-pointer hover:bg-neutral-100 
              hover:border-neutral-800 hover:text-neutral-800"
              onClick={handleClick}>
                Create
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <Toaster richColors position="bottom-right" duration={2000}/>
    </Dialog>
  );
};

export default Menu;