'use client';

import { Select } from "@/providers/coreProviders";
import React, { useEffect, useState } from "react";

interface SearchableDropdownProps {
    label: string;
    fetchOptions: () => Promise<any[]>;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({ label, fetchOptions }) => {
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        fetchOptions().then(data => {
            const formattedOptions = data.map(item => ({ value: item.id, label: item.name }));
            setOptions(formattedOptions);
        })
    }, [fetchOptions]);

    return (
        <div>
            <label className="block text-md font-medium text-gray-700">{label}</label>
            <Select
                // options={options}
                // onChange={onChange}
                placeholder={`Select a ${label.toLowerCase()}`}
            >

                test

                {/* {options.map((option: any) => {
                    <Option>{option.value}</Option>
                })
                    } */}
            </Select>
        </div>
    )
}

export default SearchableDropdown;