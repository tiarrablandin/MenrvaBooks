import { Chip, Typography } from "@/providers/coreProviders";

interface DataChipProps {
  item: any;
  color: string;
  selected: boolean;
  onClick: () => void;
}

const DataChip: React.FC<DataChipProps> = ({ item, color, selected, onClick }) => {
  console.log("Name: " + item.name + " " + selected)
  return (
    <div onClick={onClick}>
      <Chip
        value={
          <Typography variant="small" className="font-semibold scale-105 px-1">
            {item.name}
          </Typography>
        }
        variant="filled"
        size="sm"
        className={`m-1 rounded-full text-parchment/70 ${color} ${selected? "scale-125": ""}`}
      />
    </div>
  );
};

export default DataChip;
