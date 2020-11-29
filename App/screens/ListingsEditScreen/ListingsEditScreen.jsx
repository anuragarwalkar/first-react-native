import React, { useEffect } from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import AppForm from '../../components/forms/AppForm/AppForm';
import AppFormField from '../../components/forms/AppFormField/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker/AppFormPicker';
import SubmitButton from '../../components/forms/SubmitButton/SubmitButton';
import { StyleSheet } from 'react-native';
import CategoryPickerItem from '../../components/CategoryPickerItem/CategoryPickerItem';
import FormImagePicker from '../../components/forms/FormImagePicker/FormImagePicker';
import useLocation from '../../hooks/useLocation/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().required().min(1, "Please select at least one image.").label("Images")
});

const categories = [
    {label: "Furniture", value: 1, icon:'apps', backgroundColor: 'red' },
    {label: "Clothing", value: 2, icon:'email', backgroundColor: 'green'  },
    {label: "Cameras", value: 3, icon:'lock', backgroundColor: 'blue'  }
  ]

const ListingEditScreen = () => {

    const location = useLocation()

    return ( <Screen style={styles.container}>
        <AppForm initialValues={{
            title: "",
            price: "",
            description: "",
            categories: null,
            images: []
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        >
            <FormImagePicker 
            name="images"
            />

            <AppFormField 
            maxLength={255}
            name="title"
            placeholder="Title"
            />

            <AppFormField 
            keyboardType="numeric"
            maxLength={8}
            width={120}
            name="price"
            placeholder="Price"
            />

            <AppFormPicker 
            items={categories}
            PickerItemComponent={CategoryPickerItem}
            name="category"
            placeholder="Category"
            width="50%"
            numColumns={3}
            />

            <AppFormField 
            maxLength={255}
            multiline={true}
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <SubmitButton title="post"/>
        </AppForm>
    </Screen> );
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
 
export default ListingEditScreen;  