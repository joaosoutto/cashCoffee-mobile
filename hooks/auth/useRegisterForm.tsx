import { EMAIL_REGX } from "@/utils/emailUtils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegister } from "../../api/queries/auth/useRegister";

const useRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .matches(EMAIL_REGX, "E-mail inválido")
        .required("E-mail é obrigatório"),
      password: Yup.string()
        .min(8, "Senha deve ter, no mínimo, 8 caracteres")
        .required("Senha é obrigatória"),
    }),
    onSubmit: (values) => {
      register(values);
    },
    validateOnMount: true,
  });

  const { mutate: register } = useRegister(formik.values);
  return formik;
};

export default useRegisterForm;
