import { Button } from "@/components/ui/button";
import { ResizablePanel } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";

interface EntitiesPanelInterface {
  isSelected: string,
  setIsSelected: (optionName: string) => void
}

function EntitiesPanel({isSelected, setIsSelected}: EntitiesPanelInterface) {
  function handleSelected(optionName: string) {
    setIsSelected(optionName);
  }

  return (
    <ResizablePanel defaultSize={25} minSize={15} maxSize={50}>
      <ScrollArea className="h-full p-4">
        <h2 className="text-lg font-semibold mb-4">Database</h2>
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${isSelected == "teams" ? 'text-neutral-100 bg-neutral-800' : ''} cursor-pointer
            hover:bg-neutral-200`} 
            onClick={() => handleSelected("teams")}><ArrowRight /> Teams</Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${isSelected == "nations" ? 'text-neutral-100 bg-neutral-800' : ''} cursor-pointer
            hover:bg-neutral-200`} 
            onClick={() => handleSelected("nations")}><ArrowRight /> Nations</Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${isSelected == "players" ? 'text-neutral-100 bg-neutral-800' : ''} cursor-pointer
            hover:bg-neutral-200`} 
            onClick={() => handleSelected("players")}><ArrowRight /> Players</Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${isSelected == "competitions" ? 'text-neutral-100 bg-neutral-800' : ''} cursor-pointer
            hover:bg-neutral-200`} 
            onClick={() => handleSelected("competitions")}><ArrowRight /> Competitions</Button>
        </div>
      </ScrollArea>
    </ResizablePanel>
  );
};

export default EntitiesPanel;