import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface DropdownItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    shortcut?: string,
    isSelected?: boolean, 
    handleClick?: { (value: any): void },
    setDropdownText?: React.Dispatch<React.SetStateAction<string>>,
    setSelectedDropdownItem?: React.Dispatch<React.SetStateAction<any>>,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const DropdownItem = ({
    value,
    name,
    Icon,
    shortcut,
    isSelected = false,
    handleClick,
    setDropdownText,
    setSelectedDropdownItem,
    setShowModal,
}: DropdownItemProps) => (
    <div>
        <button
            className={ classNames(
                isSelected ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                `group flex items-center justify-between px-4 py-2.5 text-sm border-b border-gray-100 w-full
                 group-hover:text-gray-500 hover:bg-gray-50`
            ) }
            value={ value }
            onClick={ () => {
                setDropdownText!(name);
                setSelectedDropdownItem!(value);
                setShowModal!(false);
                handleClick!(value);
            } }
        >
            <div className="flex font-medium">
                { Icon ? (
                    <Icon className={ classNames(
                        'mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                    ) }/>
                ) : null }
                { name }
            </div>
            { shortcut ? <span className="font-normal text-gray-400">{ shortcut }</span> : null}
        </button>
    </div>
);

export default DropdownItem;