import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
const Login = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="outlined" label="Email" type="email" required/>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="outlined" label="Password" type="password" required />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Accept the terms and conditions</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Login
