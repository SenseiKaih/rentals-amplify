// farmclone/src/app/components/radio-group.tsx
import React, { useState } from 'react';

interface RadioGroupProps {
  defaultValue: string;
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (newValue: string) => {
      setSelectedValue(newValue);
      onValueChange(newValue); // Notify the parent component of the change
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (React.isValidElement<RadioGroupItemProps>(child)) {
            return React.cloneElement(child, {
              checked: child.props.value === selectedValue,
              onChange: () => handleChange(child.props.value as string),
            });
          }
          return child;
        }
        return child;
      })}
    </div>
  );
};

interface RadioGroupItemProps {
  value: string;
  id: string;
  checked?: boolean;
  onChange?: () => void;
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, checked, onChange }) => (
  <input type="radio" id={id} value={value} checked={checked} onChange={onChange} />
);

export { RadioGroup, RadioGroupItem };