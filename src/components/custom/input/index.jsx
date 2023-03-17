// @flow
import { InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
// import type { inputType } from '@admin/model/components';
import { cloneElement, useState } from 'react';
import findNestedValue from 'utils/findNestedValue';

function Input({
	label,
	name,
	control,
	errors,
	schema,
	type = 'text',
	defaultValue = '',
	comment,
	variant = 'standard',
	startIcon,
	endIcon,
	...textFieldProps
}: inputType): React$Node {
	const [isRequired] = useState(
		schema
			?.describe()
			?.fields[name]?.tests?.some((test) => test.name === 'required') ||
        false,
	);

	return (
		<Controller
			name={name}
			defaultValue={defaultValue}
			control={control}
			render={({ field }) => {
				const newField = { ...field };
				newField.value ||= '';

				const foundError = findNestedValue(errors, name);

				const MainInput = <TextField {...newField} />;

				return (
					<>
						{cloneElement(MainInput, {
							label,
							type,
							variant,
							fullWidth: true,
							required: isRequired,
							error: Boolean(foundError),
							helperText: foundError?.message || comment,
							InputProps: {
								endAdornment: endIcon && (
									<InputAdornment position={'end'}>{endIcon}</InputAdornment>
								),
								startAdornment: startIcon && (
									<InputAdornment position={'start'}>{startIcon}</InputAdornment>
								),
								style: { fontSize: '1.5rem' },
							},
							...textFieldProps,
						})
						}
					</>
				);
			}}
		/>
	);
}

export default Input;