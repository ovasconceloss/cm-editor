import Menu from "./components/menubar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

function Home() {
  return (
    <div className="select-none">
      <Menu />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25}>
          <ScrollArea className="h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Database</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start cursor-pointer">Teams</Button>
              <Button variant="ghost" className="w-full justify-start cursor-pointer">Nations</Button>
              <Button variant="ghost" className="w-full justify-start cursor-pointer">Players</Button>
              <Button variant="ghost" className="w-full justify-start cursor-pointer">Competitions</Button>
            </div>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle /> 
        <ResizablePanel defaultSize={75}>
          <ScrollArea className="h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Data</h2>
            <div className="bg-gray-100 p-6 rounded-md min-h-[500px] flex items-center justify-center text-gray-500">
              <p>No items selected yet</p>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;