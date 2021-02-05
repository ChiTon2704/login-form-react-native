import {useField} from 'formik';
import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Input({formikKey, styles, isPassword}) {
  const [field, meta, helpers] = useField({name: formikKey});

  return (
    <TextInput
      secureTextEntry={isPassword}
      value={field.value}
      style={styles}
      onChangeText={(text) => helpers.setValue(text)}
    />
  );
}
