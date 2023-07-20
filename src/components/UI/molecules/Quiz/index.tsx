import { useState } from "react";
// Imports React Hook Form e Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import { Box } from "../../atoms/Box";
import { Container } from "../../atoms/Container";
import { Form } from "../../atoms/Form";
import { Label } from "../../atoms/Label";
import { Text } from "../../atoms/Text";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { MessageError } from "../../atoms/MessageError";
import { MessageSuccess } from "../../atoms/MessageSuccess";

const schema = object({
  name: string().required("Informe o seu nome."),
  gender: string().required("Informe o seu genêro."),
  city: string().required("Informe a sua cidade."),
  cityfeatures: string().required("Informe as características da sua cidade."),
  profession: string().required("Informe a sua profissão."),
  company: string().required("Informe a empresa em que trabalha."),
  experience: string().required("Informe suas experiências."),
  pastprojects: string().required("Informe seus projetos realizados."),
  interests: string().required("Informe seus interesses."),
  hobbies: string().required("Informe seus hobbies."),
});

export const Quiz = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showMessageSuccess, setShowMessageSucces] = useState<boolean>(false);

  function handleForm(data: any) {
    // Não precisa do e.preventDefault()
    console.log("Dados enviados!");
    console.log(data);
    setShowMessageSucces(true);
  }

  return (
    <Container justify="start">
      <Box justify="start">
        <Text>Quiz</Text>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Label htmlFor="name">Nome</Label>
          <Input placeholder="Digite o seu nome" {...register("name")} />
          {errors?.name && <MessageError>{errors?.name?.message}</MessageError>}
          <Label htmlFor="gender">Gênero</Label>
          <Input placeholder="Digite ele ou ela" {...register("gender")} />
          {errors?.gender && (
            <MessageError>{errors?.gender?.message}</MessageError>
          )}
          <Label htmlFor="city">Cidade</Label>
          <Input
            placeholder="Digite a cidade em que nasceu"
            {...register("city")}
          />
          {errors?.city && <MessageError>{errors?.city?.message}</MessageError>}
          <Label htmlFor="city​​features">Características da Cidade</Label>
          <Input
            placeholder="Digite as principais características dessa cidade"
            {...register("cityfeatures")}
          />
          {errors?.cityfeatures && (
            <MessageError>{errors?.cityfeatures?.message}</MessageError>
          )}
          <Label htmlFor="profession">Profissão</Label>
          <Input
            placeholder="Digite a sua profissão"
            {...register("profession")}
          />
          {errors?.profession && (
            <MessageError>{errors?.profession?.message}</MessageError>
          )}
          <Label htmlFor="company">Empresa</Label>
          <Input
            placeholder="Digite o nome da empresa em que trabalha"
            {...register("company")}
          />
          {errors?.company && (
            <MessageError>{errors?.company?.message}</MessageError>
          )}
          <Label htmlFor="experience">Experiência</Label>
          <Input
            placeholder="Digite a sua experiência"
            {...register("experience")}
          />
          {errors?.experience && (
            <MessageError>{errors?.experience?.message}</MessageError>
          )}
          <Label htmlFor="pastprojects">Projetos Realizados</Label>
          <Input
            placeholder="Digite o título de projetos que realizou"
            {...register("pastprojects")}
          />
          {errors?.pastprojects && (
            <MessageError>{errors?.pastprojects?.message}</MessageError>
          )}
          <Label htmlFor="interests">Interesses</Label>
          <Input
            placeholder="Digite os seus interesses"
            {...register("interests")}
          />
          {errors?.interests && (
            <MessageError>{errors?.interests?.message}</MessageError>
          )}
          <Label htmlFor="hobbies ">Hobbies </Label>
          <Input
            placeholder="Digite os seus hobbies"
            {...register("hobbies")}
          />
          {errors?.hobbies && (
            <MessageError>{errors?.hobbies?.message}</MessageError>
          )}
          <Button type="submit">Enviar</Button>
          {showMessageSuccess && (
            <MessageSuccess>Dados enviados!</MessageSuccess>
          )}
        </Form>
      </Box>
    </Container>
  );
};
