import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { EmployeeFormContainer, StyledInput, ErrorText, Button, Title } from "./styles";

function EmployeeForm () {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(5, "Минимум 5 символов")
      .max(50, "Максимум 50 символов")
      .required("Обязательное поле"),
    age: Yup.number()
      .min(18, "Минимальный возраст 18")
      .max(80, "Максимальный возраст 80")
      .required("Обязательное поле"),
    jobTitle: Yup.string().max(30, "Максимум 30 символов").optional(),
  });

  return (
    <EmployeeFormContainer >
        <Title>EmployeeForm</Title>
      <Formik
        initialValues={{ fullName: "", age: "", jobTitle: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Форма отправлена:", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>Full Name:</label>
              <Field as={StyledInput} name="fullName" />
              <ErrorMessage name="fullName" component={ErrorText} />
            </div>

            <div>
              <label>Age:</label>
              <Field as={StyledInput} name="age" type="number" />
              <ErrorMessage name="age" component={ErrorText} />
            </div>

            <div>
              <label>Job Title:</label>
              <Field as={StyledInput} name="jobTitle" />
              <ErrorMessage name="jobTitle" component={ErrorText} />
            </div>

            <Button type="submit">Create</Button>
          </Form>
        )}
      </Formik>
    </EmployeeFormContainer>
  );
};

export default EmployeeForm;