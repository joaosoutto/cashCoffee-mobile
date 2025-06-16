import { EMAIL_REGX } from "@/utils/emailUtils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../api/queries/auth/useLogin";

const useLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("E-mail inválido")
        .matches(EMAIL_REGX, "E-mail inválido")
        .required("E-mail é obrigatório"),
      password: Yup.string()
        .min(8, "Senha deve ter, no mínimo, 8 caracteres")
        .required("Senha é obrigatória"),
    }),
    onSubmit: (values) => {
      login(values);
    },
    validateOnMount: true,
  });
  const { mutate: login } = useLogin(formik.values);

  return formik;
};

export default useLoginForm;
