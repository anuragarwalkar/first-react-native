import React, { Fragment } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../../components/Screen/Screen";
import AppFormField from "../../components/AppFormField/AppFormField";
import AppButton from "../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = () => {

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
      />

      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values) => {
            console.log(values);
          }}
        validationSchema={validationSchema}  
      >
        {({ handleSubmit }) => {
            
          return (
            <Fragment>
              <AppFormField
                name="email"
                autoCapitalize="none"
                placeholder="Email"
                icon="email"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <AppFormField
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
              />
              <AppButton
                title="Login"
                onPress={handleSubmit}
              />
            </Fragment>
          );
        }}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 20,
  },
});

export default LoginScreen;
