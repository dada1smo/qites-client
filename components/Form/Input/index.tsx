import { FunctionComponent, HTMLInputTypeAttribute, useState } from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
  type: HTMLInputTypeAttribute;
  mode?:
    | 'email'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined;
  label: string;
  name: string;
  step?: number;
  placeholder?: string;
  control: any;
  defaultValue?: string;
  errors: any;
  initialLabel?: boolean;
  preffix?: string;
}

const Input: FunctionComponent<InputProps> = ({
  type,
  mode = 'text',
  label,
  name,
  step = 1,
  placeholder,
  control,
  defaultValue,
  errors,
  initialLabel = true,
  preffix,
}) => {
  const [initial, setInitial] = useState<boolean>(
    defaultValue ? false : initialLabel
  );

  const fieldError = errors ? errors[name] : '';
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
        <div>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                id={name}
                type={type}
                inputMode={mode}
                step={step}
                value={value}
                onClick={() => setInitial(false)}
                onFocus={() => setInitial(false)}
                onBlur={() => {
                  onBlur();
                  if (!value && initialLabel) {
                    setInitial(true);
                  }
                }}
                placeholder={placeholder}
                onChange={(e) => {
                  onChange(e);
                  if (value) {
                    setInitial(false);
                  }
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
