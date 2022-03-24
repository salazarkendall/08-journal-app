import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const resetInputs = (newStateForm = initialState) => {
		setFormValues(newStateForm);
	};

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	return [formValues, handleInputChange, resetInputs];
};
