import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod Schema
const formSchema = z.object({
  name: z
    .string()
    .min(3, "Minimum length is 3")
    .max(20, "Maximum length is 20"),

  age: z
    .coerce
    .number()
    .min(10, "Age must be at least 10")
    .max(20, "Age must be at most 20"),

  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .max(15, "Password must be at most 15 characters"),
});

function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data) {
    console.log(data);
    alert("Form Submitted Successfully!");
  }

  return (
    <div>
      <h1>Zod Form Validation</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        {/* Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name")}
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.name?.message}
          </span>
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age: </label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age")}
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.age?.message}
          </span>
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <br />
          <span style={{ color: "red" }}>
            {errors.password?.message}
          </span>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ZodForm;