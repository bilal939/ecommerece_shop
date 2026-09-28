import { Button } from "../components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { FieldGroup, Field } from "../components/ui/field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schema";
import * as z from "zod";
import { FormInputField } from "../components/customComponent/auth-form";
import { Link } from "react-router-dom";
export const Login = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Start Shopping by SignIn</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(() => {})}>
          <FieldGroup>
            <FormInputField
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
            <FormInputField
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </FieldGroup>
          <div className="mt-2 flex items-center justify-between">
            <CardDescription>Don't Have an Account?</CardDescription>
            <Link to={"/register"} className="underline font-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            type="button"
            size={"lg"}
            variant="outline"
            onClick={() => form.reset()}
          >
            Clear
          </Button>
          <Button type="submit" size={"lg"} form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
