import React, { Fragment } from 'react';
import ImageList from '../../ImageList/ImageList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormikContext} from 'formik';
import { titleCase } from '../../../Utils/utils';

const FormImagePicker = ({name}) => {
    const {setFieldValue, errors, touched, values } = useFormikContext();

    const imageUris = values[name];

    const onSelectImage = (imageUri) => {
        setFieldValue(name, [...imageUris, imageUri]);
    }

    const onDeleteImage = (imageUri) => {
        setFieldValue(name ,imageUris.filter(img => img !== imageUri));
    }

    return ( 
        <Fragment>
            <ImageList imageUris={imageUris} onSelectImage={onSelectImage} onDeleteImage={onDeleteImage} />
            <ErrorMessage error={errors[titleCase(name)]} visible={touched[name]}/>
        </Fragment>
     );
}
 
export default FormImagePicker;