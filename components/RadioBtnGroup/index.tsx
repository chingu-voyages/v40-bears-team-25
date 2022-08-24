/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import { FormControlLabel, Radio, RadioProps } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

interface RadioBtnGrpProps extends RadioProps {
	label: string
	value: string
	name: string
}

const RadioButtonGroup = (props: RadioBtnGrpProps) => {
	const [field] = useField({
		name: props.name as string,
		type: 'radio',
		value: props.value,
	})
	return (
		<FormControlLabel
			control={<Radio {...props} {...field} />}
			label={props.label}
		/>
	)
}

export default RadioButtonGroup
