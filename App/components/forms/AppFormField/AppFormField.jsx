import React, { Fragment } from "react";
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import ErrorMessage from '../../forms/ErrorMessage/ErrorMessage';
import { useFormikContext} from 'formik';
import { titleCase} from '../../../Utils/utils';

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, handleChange, errors, touched } = useFormikContext();

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
