"use client";

import { Typography } from "@/providers/coreProviders";
import React, { useEffect, useState } from "react";
import DataChip from "./dataChip";

interface DataConfigType {
  apiEndpoint: string;
  pageTitle: string;
  description: string;
}

const dataConfig: { [key: string]: DataConfigType } = {
  genres: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/genres`,
    pageTitle: "Genres",
    description: "Select a minimum of 3 genres you like",
  },
  subgenres: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/subgenres`,
    pageTitle: "Subgenres",
    description: "Select at least 3 sub-genres you like",
  },
  keywords: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/keywords`,
    pageTitle: "Keywords",
    description: "Select at least of 3 keywords",
  },
  tags: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/tags`,
    pageTitle: "Community tags",
    description: "Select at least 3 community tags you like",
  },
};

const fetchData = async (apiEndpoint: string): Promise<any[]> => {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed", error);
    return [];
  }
};

interface DataSelectionsProps {
  type: string;
}

const DataSelections: React.FC<DataSelectionsProps> = ({ type }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedChips, setSelectedChips] = useState<Set<string>>(new Set());

  const chipColors = ["bg-deep-sea", "bg-rose", "bg-eggplant", "bg-medium-malachite"];
  const getColorClass = (index: number) => chipColors[index % chipColors.length];

  useEffect(() => {
    const fetchDataForType = async () => {
      const endpoint = dataConfig[type].apiEndpoint;
      const fetchedData = await fetchData(endpoint);
      setData(
        fetchedData.map((item: any, index: number) => ({
          ...item,
          color: getColorClass(Math.floor(Math.random() * index)),
        }))
      );
    };

    fetchDataForType();
  }, [type]);

  const handleChipClick = (item: any) => {
    setSelectedChips((prevSelected) => {
      const updated = new Set(prevSelected);
      if (updated.has(item.name)) {
        updated.delete(item.name);
      } else {
        updated.add(item.name);
      }
      return updated;
    });
  };

  return (
    <div className="mx-20 min-h-[calc(100vh-295px)]">
      <Typography variant="h2" className="mt-4">
        {dataConfig[type].pageTitle}
      </Typography>
      <Typography className="mb-2 font-medium text-lg">{dataConfig[type].description}</Typography>
      <div className="flex flex-wrap">
        {data &&
          data.map((item, index) => (
            <DataChip
              key={index}
              item={item}
              color={item.color}
              selected={selectedChips.has(item.name)}
              onClick={() => handleChipClick(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default DataSelections;
