import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanel } from "@/components/ui/resizable";

interface EntitiesData {
  isSelected: string,
}

function EntitiesPanelData({isSelected}: EntitiesData) {
  return (
    <ResizablePanel defaultSize={75}>
      <ScrollArea className="h-full p-4">
        <h2 className="text-lg font-semibold capitalize mb-4">{isSelected}</h2>
        <div className="bg-gray-100 p-6 rounded-md min-h-[500px] flex items-center justify-center text-gray-500">
          <p>No items selected yet</p>
        </div>
      </ScrollArea>
    </ResizablePanel>
  );
};

export default EntitiesPanelData;