import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../../AppPicker/AppPicker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { titleCase } from '../../../Utils/utils';

const AppFormPicker = ({ items, name, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <Fragment>
            <AppPicker 
            items={items}
            onSelectItem={(item) => setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            />
            <ErrorMessage error={errors[titleCase(name)]} visible={touched[name]}/>
        </Fragment>
    )
}

export default AppFormPicker;