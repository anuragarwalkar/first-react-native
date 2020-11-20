import React, { Fragment } from "react";
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormikContext} from 'formik';
import { titleCase} from '../../Utils/utils';

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, handleChange, errors, touched } = useFormikContext();
    console.log('errors:', errors)
  return <Fragment>
    <CustomTextInput
      {...otherProps}
      onChangeText={handleChange(name)}
      onBlur={() => setFieldTouched(name)}
    />

    <ErrorMessage visible={touched[name]} error={errors[titleCase(name)]} />
  </Fragment>;
};

export default AppFormField;
