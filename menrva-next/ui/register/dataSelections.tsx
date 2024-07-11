"use client";

import { Typography } from "@/providers/coreProviders";
import React, { useEffect, useState } from "react";
import DataChip from "./dataChip";
import { color } from "framer-motion";

interface DataConfigType {
  apiEndpoint: string;
  pageTitle: string;
  description: string;
}

const dataConfig: { [key: string]: DataConfigType } = {
  genres: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/genres`,
    pageTitle: "Genres",
    description: "Select your favorite genres",
  },
  subgenres: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/subgenres`,
    pageTitle: "Subgenres",
    description: "Select your favorite sub-genres",
  },
  keywords: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/keywords`,
    pageTitle: "Keywords",
    description: "Select your favorite keywords",
  },
  tags: {
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/api/tags`,
    pageTitle: "Community tags",
    description: "Select your favorite community tags",
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

const DataSelections: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: any[] }>({});
  const [selectedChips, setSelectedChips] = useState<{ [key: string]: Set<string> }>({});

  const chipColors = ["bg-deep-sea", "bg-rose", "bg-eggplant", "bg-medium-malachite"];
  const getColorClass = (index: number) => chipColors[index % chipColors.length];

  useEffect(() => {
    const fetchDataForAllTypes = async () => {
      let allData: { [key: string]: any[] } = {};
      for (const type of Object.keys(dataConfig)) {
        const endpoint = dataConfig[type].apiEndpoint;
        const fetchedData = await fetchData(endpoint);
        allData[type] = fetchedData.map((item: any, index: number) => ({
          ...item,
          color: getColorClass(Math.floor(Math.random() * index)),
        }));
      }
      setData(allData);

      setSelectedChips(
        Object.keys(dataConfig).reduce((acc, key) => {
          acc[key] = new Set();
          return acc;
        }, {} as { [key: string]: Set<string> })
      );
    };

    fetchDataForAllTypes();
  }, []);

  const handleChipClick = (type: string, item: any) => {
    setSelectedChips((prevSelected) => {
      const updated = new Set(prevSelected[type]);
      if (updated.has(item.name)) {
        updated.delete(item.name);
      } else {
        updated.add(item.name);
      }
      return { ...prevSelected, [type]: updated };
    });
  };

  return (
    <div>
      {Object.keys(data).map((type) => (
        <div key={type} className="mx-20">
          <Typography variant="h2" className="mt-4">
            {dataConfig[type].pageTitle}
          </Typography>
          <Typography className="mb-2">{dataConfig[type].description}</Typography>
          <div className="flex flex-wrap">
            {data[type] &&
              data[type].map((item, index) => (
                  <DataChip
                    key={index}
                    item={item}
                    color={item.color}
                    selected={selectedChips[type].has(item.name)}
                    onClick={() => handleChipClick(type, item)}
                  />
                )
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataSelections;
