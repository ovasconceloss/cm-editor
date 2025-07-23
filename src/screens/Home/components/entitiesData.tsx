import { useDatabase } from "@/contexts/DatabaseContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanel } from "@/components/ui/resizable";

interface EntitiesData {
  isSelected: string,
}

function EntitiesPanelData({isSelected}: EntitiesData) {
  const { databaseName } = useDatabase();

  return (
    <ResizablePanel defaultSize={75}>
      <ScrollArea className="h-full p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold capitalize mb-4">{isSelected}</h2>
          {
          databaseName != null
          ? <h2 className="w-[10rem] rounded-2xl text-neutral-100 text-center text-md font-semibold capitalize mb-4 bg-neutral-900">{databaseName.replace(".db", "")}</h2>
          : <h1></h1>
          }
        </div>
        <div className="bg-gray-100 p-6 rounded-md min-h-[500px] flex items-center justify-center text-gray-500">
          <p>No items selected yet</p>
        </div>
      </ScrollArea>
    </ResizablePanel>
  );
};

export default EntitiesPanelData;