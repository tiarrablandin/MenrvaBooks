'use client';

import { Series } from "@/app/lib/models/series";
import { fetchSeriesAll } from "@/app/lib/services/apiService";
import { Select, Option, Typography } from "@/providers";
import { useEffect, useState } from "react";

interface SeriesDropdownProps {
    onChange: (series: Series) => void;
    defaultValue: string;
}

const SeriesDropdown: React.FC<SeriesDropdownProps> = ({ onChange, defaultValue }) => {
    const [options, setOptions] = useState<Series[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOptions = async () => {
            const fetchedOptions = await fetchSeriesAll();
            setOptions(fetchedOptions);
            setLoading(false);
        };

        fetchOptions();
    }, []);

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    const handleChange = (selectedName: string | undefined) => {
        const selectedSeries = options.find(option => option.name === selectedName);
        if (selectedSeries) {
            onChange(selectedSeries);
            setSelectedValue(selectedSeries.name);
        }
    };

    if (loading) {
        return <Typography>Loading...</p>;
    }

    return (
        <div>
            <Select
                placeholder={`Select a series`}
                label="Series"
                onChange={handleChange}
                value={selectedValue}
            >
                {options.map((option) => (
                    <Option key={option.name} value={option.name}>
                        {option.name}
                    </Option>
                ))}
            </Select>
        </div>
    )
}

export default SeriesDropdown;